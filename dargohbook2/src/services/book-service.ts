import { getBookRepository } from '@/lib/database';
import { BookFilters, PaginatedBooks, Book } from '@/types';
import { BookEntity } from '@/entities';
import { Like, MoreThanOrEqual, LessThanOrEqual, MoreThan, FindOptionsWhere } from 'typeorm';

function mapEntityToBook(entity: BookEntity): Book {
  return {
    id: entity.id,
    externalId: entity.externalId,
    name: entity.name,
    sku: entity.sku,
    barcode: entity.barcode,
    retailPrice: Number(entity.retailPrice),
    supplyPrice: Number(entity.supplyPrice),
    description: entity.description,
    quantity: entity.quantity,
    supplierName: entity.supplierName,
    shopName: entity.shopName,
    createdAt: entity.createdAt,
    updatedAt: entity.updatedAt,
    syncedAt: entity.syncedAt,
  };
}

export async function getBooks(filters: BookFilters): Promise<PaginatedBooks> {
  const bookRepo = await getBookRepository();

  const page = filters.page || 1;
  const limit = filters.limit || 20;
  const skip = (page - 1) * limit;

  const where: FindOptionsWhere<BookEntity> = {};

  if (filters.inStock) {
    where.quantity = MoreThan(0);
  }

  // QueryBuilder ishlatamiz murakkab qidiruvlar uchun
  let queryBuilder = bookRepo.createQueryBuilder('book');

  if (filters.search) {
    queryBuilder = queryBuilder.andWhere(
      '(LOWER(book.name) LIKE LOWER(:search) OR book.barcode LIKE :search OR book.sku LIKE :search)',
      { search: `%${filters.search}%` }
    );
  }

  if (filters.minPrice !== undefined) {
    queryBuilder = queryBuilder.andWhere('book.retail_price >= :minPrice', { minPrice: filters.minPrice });
  }

  if (filters.maxPrice !== undefined) {
    queryBuilder = queryBuilder.andWhere('book.retail_price <= :maxPrice', { maxPrice: filters.maxPrice });
  }

  if (filters.inStock) {
    queryBuilder = queryBuilder.andWhere('book.quantity > 0');
  }

  const [books, total] = await queryBuilder
    .orderBy('book.name', 'ASC')
    .skip(skip)
    .take(limit)
    .getManyAndCount();

  return {
    books: books.map(mapEntityToBook),
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
}

export async function getBookById(id: string): Promise<Book | null> {
  const bookRepo = await getBookRepository();
  const book = await bookRepo.findOne({ where: { id } });
  return book ? mapEntityToBook(book) : null;
}

export async function getBookStats() {
  const bookRepo = await getBookRepository();

  const totalBooks = await bookRepo.count();
  const inStockBooks = await bookRepo.count({ where: { quantity: MoreThan(0) } });

  const result = await bookRepo
    .createQueryBuilder('book')
    .select('MIN(book.retail_price)', 'minPrice')
    .addSelect('MAX(book.retail_price)', 'maxPrice')
    .getRawOne();

  return {
    totalBooks,
    inStockBooks,
    outOfStockBooks: totalBooks - inStockBooks,
    minPrice: Number(result?.minPrice || 0),
    maxPrice: Number(result?.maxPrice || 0),
  };
}
