import { Book } from '@/types';
import { formatPrice } from '@/utils';
import { Package, CheckCircle, XCircle } from 'lucide-react';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  const inStock = book.quantity > 0;

  return (
    <div className="card group">
      {/* Kitob rasmi o'rnida rang */}
      <div className="h-40 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
        <Package className="w-16 h-16 text-primary-400 group-hover:scale-110 transition-transform" />
      </div>

      <div className="p-4">
        {/* Nomi */}
        <h3 className="font-semibold text-gray-900 line-clamp-2 min-h-[48px] mb-2">
          {book.name}
        </h3>

        {/* Barcode */}
        <p className="text-xs text-gray-500 mb-2">
          Kod: {book.barcode || book.sku}
        </p>

        {/* Narx */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-lg font-bold text-primary-600">
            {formatPrice(book.retailPrice)}
          </span>
        </div>

        {/* Mavjudlik */}
        <div className={`flex items-center gap-1.5 text-sm ${inStock ? 'text-green-600' : 'text-red-500'}`}>
          {inStock ? (
            <>
              <CheckCircle className="w-4 h-4" />
              <span>Mavjud ({book.quantity} dona)</span>
            </>
          ) : (
            <>
              <XCircle className="w-4 h-4" />
              <span>Mavjud emas</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
