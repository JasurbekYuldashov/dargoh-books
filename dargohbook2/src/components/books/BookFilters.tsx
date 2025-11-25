'use client';

import { Search, X, Filter } from 'lucide-react';
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

  const clearSearch = () => {
    onFilterChange({ ...filters, search: '', page: 1 });
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

  const hasActiveFilters = filters.minPrice || filters.maxPrice || filters.inStock;

  const inputBaseStyle: React.CSSProperties = {
    height: '48px',
    backgroundColor: 'white',
    color: '#111827',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    fontSize: '15px',
    outline: 'none',
    WebkitAppearance: 'none',
    transition: 'all 0.2s ease',
  };

  return (
    <div
      style={{
        backgroundColor: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: '16px',
        padding: '20px',
        marginBottom: '24px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      }}
    >
      {/* Qidiruv */}
      <div style={{ position: 'relative', width: '100%', marginBottom: '16px' }}>
        <Search
          style={{
            position: 'absolute',
            left: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '20px',
            height: '20px',
            color: '#9ca3af',
            pointerEvents: 'none',
          }}
        />
        <input
          type="text"
          placeholder="Kitob nomi, barcode yoki SKU bo'yicha qidiring..."
          value={filters.search || ''}
          onChange={(e) => handleSearchChange(e.target.value)}
          style={{
            ...inputBaseStyle,
            width: '100%',
            paddingLeft: '48px',
            paddingRight: filters.search ? '48px' : '16px',
            boxSizing: 'border-box',
          }}
        />
        {filters.search && (
          <button
            onClick={clearSearch}
            style={{
              position: 'absolute',
              right: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#f3f4f6',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              color: '#6b7280',
              transition: 'all 0.2s ease',
            }}
            type="button"
          >
            <X style={{ width: '16px', height: '16px' }} />
          </button>
        )}
      </div>

      {/* Filtrlar */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        {/* Filtr label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: '#6b7280',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          <Filter style={{ width: '16px', height: '16px' }} />
          <span>Filtr:</span>
        </div>

        {/* Narx filtri */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#f9fafb',
            padding: '6px 12px',
            borderRadius: '12px',
          }}
        >
          <input
            type="number"
            placeholder="Min"
            value={filters.minPrice || ''}
            onChange={(e) => handleMinPriceChange(e.target.value)}
            style={{
              ...inputBaseStyle,
              width: '100px',
              height: '36px',
              padding: '0 12px',
              textAlign: 'center',
              fontSize: '14px',
            }}
            min={0}
          />
          <span style={{ color: '#9ca3af', fontWeight: 500 }}>—</span>
          <input
            type="number"
            placeholder="Max"
            value={filters.maxPrice || ''}
            onChange={(e) => handleMaxPriceChange(e.target.value)}
            style={{
              ...inputBaseStyle,
              width: '100px',
              height: '36px',
              padding: '0 12px',
              textAlign: 'center',
              fontSize: '14px',
            }}
            max={maxPriceLimit}
          />
          <span style={{ color: '#6b7280', fontSize: '13px' }}>so'm</span>
        </div>

        {/* Mavjudlik filtri */}
        <label
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            backgroundColor: filters.inStock ? '#f0fdf4' : '#f9fafb',
            padding: '8px 16px',
            borderRadius: '12px',
            border: filters.inStock ? '1px solid #86efac' : '1px solid transparent',
            transition: 'all 0.2s ease',
          }}
        >
          <input
            type="checkbox"
            checked={filters.inStock || false}
            onChange={(e) => handleInStockChange(e.target.checked)}
            style={{
              width: '18px',
              height: '18px',
              accentColor: '#16a34a',
              cursor: 'pointer',
            }}
          />
          <span
            style={{
              color: filters.inStock ? '#16a34a' : '#374151',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            Faqat mavjudlari
          </span>
        </label>

        {/* Filtrlarni tozalash */}
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            type="button"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: '#dc2626',
              background: '#fef2f2',
              border: 'none',
              cursor: 'pointer',
              padding: '8px 16px',
              fontSize: '14px',
              fontWeight: 500,
              borderRadius: '12px',
              transition: 'all 0.2s ease',
            }}
          >
            <X style={{ width: '16px', height: '16px' }} />
            <span>Tozalash</span>
          </button>
        )}
      </div>
    </div>
  );
}
