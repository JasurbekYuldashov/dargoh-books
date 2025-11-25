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
          <div style={{ position: 'relative' }}>
            <Search
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '20px',
                height: '20px',
                color: '#9ca3af',
                pointerEvents: 'none'
              }}
            />
            <input
              type="text"
              placeholder="Kitob nomi, barcode yoki SKU bo'yicha qidiring..."
              value={filters.search || ''}
              onChange={(e) => handleSearchChange(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 16px 10px 44px',
                backgroundColor: 'white',
                color: '#111827',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                outline: 'none'
              }}
            />
          </div>
        </div>

        {/* Narx filtri */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <input
            type="number"
            placeholder="Min narx"
            value={filters.minPrice || ''}
            onChange={(e) => handleMinPriceChange(e.target.value)}
            style={{
              width: '110px',
              padding: '10px 12px',
              backgroundColor: 'white',
              color: '#111827',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              fontSize: '14px',
              outline: 'none'
            }}
            min={0}
          />
          <span style={{ color: '#9ca3af' }}>-</span>
          <input
            type="number"
            placeholder="Max narx"
            value={filters.maxPrice || ''}
            onChange={(e) => handleMaxPriceChange(e.target.value)}
            style={{
              width: '110px',
              padding: '10px 12px',
              backgroundColor: 'white',
              color: '#111827',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              fontSize: '14px',
              outline: 'none'
            }}
            max={maxPriceLimit}
          />
        </div>

        {/* Mavjudlik filtri */}
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', whiteSpace: 'nowrap' }}>
          <input
            type="checkbox"
            checked={filters.inStock || false}
            onChange={(e) => handleInStockChange(e.target.checked)}
            style={{ width: '16px', height: '16px', accentColor: '#0284c7' }}
          />
          <span style={{ color: '#374151' }}>Faqat mavjudlari</span>
        </label>

        {/* Filtrlarni tozalash */}
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#6b7280', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <X style={{ width: '16px', height: '16px' }} />
            <span>Tozalash</span>
          </button>
        )}
      </div>
    </div>
  );
}
