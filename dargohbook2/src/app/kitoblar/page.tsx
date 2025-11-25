'use client';

import { useBooks, useStats } from '@/hooks';
import { BookGrid, BookFilters, Pagination } from '@/components/books';
import { Spinner } from '@/components/ui';
import { BookOpen, Package, CheckCircle } from 'lucide-react';
import { formatPrice } from '@/utils';

export default function BooksPage() {
  const { books, total, totalPages, isLoading, error, filters, setFilters } = useBooks();
  const { stats } = useStats();

  const handlePageChange = (page: number) => {
    setFilters({ ...filters, page });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8fafc' }}>
      {/* Header */}
      <div style={{ backgroundColor: 'white', borderBottom: '1px solid #e5e7eb' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: '#111827' }}>
            Kitoblar katalogi
          </h1>
          <p style={{ color: '#4b5563' }}>
            Mavjud kitoblar orasidan o'zingizga keraklisini toping
          </p>

          {/* Stats */}
          {stats && (
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center gap-2 text-sm" style={{ color: '#4b5563' }}>
                <BookOpen className="w-4 h-4" style={{ color: '#0284c7' }} />
                <span>Jami: {stats.totalBooks} ta kitob</span>
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: '#4b5563' }}>
                <CheckCircle className="w-4 h-4" style={{ color: '#16a34a' }} />
                <span>Mavjud: {stats.inStockBooks} ta</span>
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: '#4b5563' }}>
                <Package className="w-4 h-4" style={{ color: '#9ca3af' }} />
                <span>Narx: {formatPrice(stats.minPrice)} - {formatPrice(stats.maxPrice)}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Filters */}
        <BookFilters
          filters={filters}
          onFilterChange={setFilters}
          maxPriceLimit={stats?.maxPrice || 1000000}
        />

        {/* Results info */}
        <div className="flex items-center justify-between mb-4">
          <p style={{ color: '#4b5563' }}>
            {isLoading ? (
              'Yuklanmoqda...'
            ) : (
              <>
                <span className="font-medium" style={{ color: '#111827' }}>{total}</span> ta kitob topildi
              </>
            )}
          </p>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="flex justify-center py-12">
            <Spinner size="lg" />
          </div>
        )}

        {/* Error */}
        {error && (
          <div
            className="p-4 rounded-lg mb-4"
            style={{ backgroundColor: '#fef2f2', color: '#dc2626' }}
          >
            {error}
          </div>
        )}

        {/* Books grid */}
        {!isLoading && !error && (
          <>
            <BookGrid books={books} />
            <Pagination
              currentPage={filters.page || 1}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  );
}
