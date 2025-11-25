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
      <div
        className="h-40 flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)' }}
      >
        <Package
          className="w-16 h-16 group-hover:scale-110 transition-transform"
          style={{ color: '#38bdf8' }}
        />
      </div>

      <div className="p-4">
        {/* Nomi */}
        <h3
          className="font-semibold line-clamp-2 min-h-[48px] mb-2"
          style={{ color: '#111827' }}
        >
          {book.name}
        </h3>

        {/* Barcode */}
        <p className="text-xs mb-2" style={{ color: '#6b7280' }}>
          Kod: {book.barcode || book.sku}
        </p>

        {/* Narx */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-lg font-bold" style={{ color: '#0284c7' }}>
            {formatPrice(book.retailPrice)}
          </span>
        </div>

        {/* Mavjudlik */}
        <div
          className="flex items-center gap-1.5 text-sm"
          style={{ color: inStock ? '#16a34a' : '#dc2626' }}
        >
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
