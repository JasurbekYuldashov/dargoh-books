'use client';

import { Search, X } from 'lucide-react';
import { BookFilters as BookFiltersType } from '@/types';

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
    <div
      className="rounded-xl shadow-sm p-4 mb-6"
      style={{ backgroundColor: 'white', border: '1px solid #e5e7eb' }}
    >
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Qidiruv */}
        <div className="flex-1">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
              style={{ color: '#9ca3af' }}
            />
            <input
              type="text"
              placeholder="Kitob nomi, barcode yoki SKU bo'yicha qidiring..."
              value={filters.search || ''}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="input pl-10"
              style={{
                backgroundColor: 'white',
                color: '#111827',
                border: '1px solid #d1d5db'
              }}
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
            className="input"
            style={{
              width: '7rem',
              backgroundColor: 'white',
              color: '#111827',
              border: '1px solid #d1d5db'
            }}
            min={0}
          />
          <span style={{ color: '#9ca3af' }}>-</span>
          <input
            type="number"
            placeholder="Max narx"
            value={filters.maxPrice || ''}
            onChange={(e) => handleMaxPriceChange(e.target.value)}
            className="input"
            style={{
              width: '7rem',
              backgroundColor: 'white',
              color: '#111827',
              border: '1px solid #d1d5db'
            }}
            max={maxPriceLimit}
          />
        </div>

        {/* Mavjudlik filtri */}
        <label className="flex items-center gap-2 cursor-pointer whitespace-nowrap">
          <input
            type="checkbox"
            checked={filters.inStock || false}
            onChange={(e) => handleInStockChange(e.target.checked)}
            className="w-4 h-4 rounded"
            style={{ accentColor: '#0284c7' }}
          />
          <span style={{ color: '#374151' }}>Faqat mavjudlari</span>
        </label>

        {/* Filtrlarni tozalash */}
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 transition-colors"
            style={{ color: '#6b7280' }}
          >
            <X className="w-4 h-4" />
            <span>Tozalash</span>
          </button>
        )}
      </div>
    </div>
  );
}
