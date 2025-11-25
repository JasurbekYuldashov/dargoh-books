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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Kitoblar katalogi</h1>
          <p className="text-gray-600">
            Mavjud kitoblar orasidan o'zingizga keraklisini toping
          </p>

          {/* Stats */}
          {stats && (
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <BookOpen className="w-4 h-4 text-primary-600" />
                <span>Jami: {stats.totalBooks} ta kitob</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Mavjud: {stats.inStockBooks} ta</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Package className="w-4 h-4 text-gray-400" />
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
          <p className="text-gray-600">
            {isLoading ? (
              'Yuklanmoqda...'
            ) : (
              <>
                <span className="font-medium">{total}</span> ta kitob topildi
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
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-4">
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
