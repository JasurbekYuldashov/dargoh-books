import { getBookRepository, getSyncLogRepository } from '@/lib/database';
import { BookEntity, SyncLogEntity } from '@/entities';
import { BillzProduct } from '@/types';
import { fetchBillzProducts } from './billz-products';
import { stripHtml } from '@/utils/string';

function mapBillzProductToBook(product: BillzProduct): Partial<BookEntity> {
  const supplierName = product.suppliers?.[0]?.name || '';
  const shopData = product.product_supply_stock?.[0];
  const shopName = shopData?.shop_name || '';
  const quantity = shopData?.active_measurement_value || product.measurement_values?.total_active_measurement_value || 0;

  return {
    externalId: product.id,
    name: product.name,
    sku: product.sku,
    barcode: product.barcode || '',
    retailPrice: product.retail_price,
    supplyPrice: product.supply_price,
    description: stripHtml(product.description || ''),
    quantity,
    supplierName,
    shopName,
    syncedAt: new Date(),
  };
}

export interface SyncResult {
  totalBooks: number;
  newBooks: number;
  updatedBooks: number;
  durationMs: number;
}

export async function syncBooks(): Promise<SyncResult> {
  const startTime = Date.now();
  const bookRepo = await getBookRepository();
  const syncLogRepo = await getSyncLogRepository();

  let result: SyncResult = {
    totalBooks: 0,
    newBooks: 0,
    updatedBooks: 0,
    durationMs: 0,
  };

  try {
    console.log('Kitoblar sinxronizatsiyasi boshlandi...');

    const products = await fetchBillzProducts();
    result.totalBooks = products.length;

    for (const product of products) {
      const bookData = mapBillzProductToBook(product);

      const existingBook = await bookRepo.findOne({
        where: { externalId: product.id },
      });

      if (existingBook) {
        await bookRepo.update(existingBook.id, bookData);
        result.updatedBooks++;
      } else {
        const newBook = bookRepo.create(bookData);
        await bookRepo.save(newBook);
        result.newBooks++;
      }
    }

    result.durationMs = Date.now() - startTime;

    // Sync log yozish
    const syncLog = syncLogRepo.create({
      totalBooks: result.totalBooks,
      newBooks: result.newBooks,
      updatedBooks: result.updatedBooks,
      status: 'success',
      durationMs: result.durationMs,
    });
    await syncLogRepo.save(syncLog);

    console.log(`Sinxronizatsiya yakunlandi: ${result.totalBooks} ta kitob, ${result.newBooks} ta yangi, ${result.updatedBooks} ta yangilandi (${result.durationMs}ms)`);

    return result;
  } catch (error) {
    result.durationMs = Date.now() - startTime;

    // Xatolik logini yozish
    const syncLog = syncLogRepo.create({
      totalBooks: result.totalBooks,
      newBooks: result.newBooks,
      updatedBooks: result.updatedBooks,
      status: 'failed',
      errorMessage: error instanceof Error ? error.message : 'Unknown error',
      durationMs: result.durationMs,
    });
    await syncLogRepo.save(syncLog);

    console.error('Sinxronizatsiya xatoligi:', error);
    throw error;
  }
}

export async function getLastSyncLog(): Promise<SyncLogEntity | null> {
  const syncLogRepo = await getSyncLogRepository();
  return syncLogRepo.findOne({
    order: { createdAt: 'DESC' },
  });
}
