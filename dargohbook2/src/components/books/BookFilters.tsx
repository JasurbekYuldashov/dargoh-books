'use client';

import { Search, Filter, X } from 'lucide-react';
import { Input } from '@/components/ui';
import { BookFilters as BookFiltersType } from '@/types';
import { formatPrice } from '@/utils';

interface BookFiltersProps {
  filters: BookFiltersType;
  onFilterChange: (filters: BookFiltersType) => void;
  maxPriceLimit: number;
}

export function BookFilters({ filters, onFilterChange, maxPriceLimit }: BookFiltersProps) {
  const handleSearchChange = (value: string) => {
    onFilterChange({ ...filters, search: value, page: 1 });
  };

  const handleInStockChange = (checked: boolean) => {
    onFilterChange({ ...filters, inStock: checked, page: 1 });
  };

  const handleMinPriceChange = (value: string) => {
    const minPrice = value ? Number(value) : undefined;
    onFilterChange({ ...filters, minPrice, page: 1 });
  };

  const handleMaxPriceChange = (value: string) => {
    const maxPrice = value ? Number(value) : undefined;
    onFilterChange({ ...filters, maxPrice, page: 1 });
  };

  const clearFilters = () => {
    onFilterChange({
      search: '',
      minPrice: undefined,
      maxPrice: undefined,
      inStock: false,
      page: 1,
      limit: filters.limit,
    });
  };

  const hasActiveFilters = filters.search || filters.minPrice || filters.maxPrice || filters.inStock;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Qidiruv */}
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Kitob nomi, barcode yoki SKU bo'yicha qidiring..."
              value={filters.search || ''}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="input pl-10"
            />
          </div>
        </div>

        {/* Narx filtri */}
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min narx"
            value={filters.minPrice || ''}
            onChange={(e) => handleMinPriceChange(e.target.value)}
            className="input w-28"
            min={0}
          />
          <span className="text-gray-400">-</span>
          <input
            type="number"
            placeholder="Max narx"
            value={filters.maxPrice || ''}
            onChange={(e) => handleMaxPriceChange(e.target.value)}
            className="input w-28"
            max={maxPriceLimit}
          />
        </div>

        {/* Mavjudlik filtri */}
        <label className="flex items-center gap-2 cursor-pointer whitespace-nowrap">
          <input
            type="checkbox"
            checked={filters.inStock || false}
            onChange={(e) => handleInStockChange(e.target.checked)}
            className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
          />
          <span className="text-gray-700">Faqat mavjudlari</span>
        </label>

        {/* Filtrlarni tozalash */}
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-4 h-4" />
            <span>Tozalash</span>
          </button>
        )}
      </div>
    </div>
  );
}
