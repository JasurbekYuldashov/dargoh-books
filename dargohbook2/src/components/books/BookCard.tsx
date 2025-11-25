'use client';

import { Book } from '@/types';
import { formatPrice } from '@/utils';
import { Package, CheckCircle, XCircle, BookOpen } from 'lucide-react';
import { useState } from 'react';

interface BookCardProps {
  book: Book;
  index?: number;
}

export function BookCard({ book, index = 0 }: BookCardProps) {
  const inStock = book.quantity > 0;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid #f3f4f6',
        boxShadow: isHovered
          ? '0 20px 40px rgba(0,0,0,0.12)'
          : '0 2px 8px rgba(0,0,0,0.04)',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`,
      }}
    >
      {/* Kitob rasmi o'rnida rang */}
      <div
        style={{
          height: '160px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: inStock
            ? 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)'
            : 'linear-gradient(135deg, #fef2f2 0%, #fecaca 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: 'absolute',
            top: '-50%',
            right: '-50%',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: inStock
              ? 'rgba(56, 189, 248, 0.2)'
              : 'rgba(252, 165, 165, 0.3)',
            transform: isHovered ? 'scale(1.5)' : 'scale(1)',
            transition: 'transform 0.5s ease',
          }}
        />
        <BookOpen
          style={{
            width: '64px',
            height: '64px',
            color: inStock ? '#0284c7' : '#ef4444',
            transform: isHovered ? 'scale(1.15) rotate(-5deg)' : 'scale(1)',
            transition: 'transform 0.3s ease',
            position: 'relative',
            zIndex: 1,
          }}
        />

        {/* Stock badge */}
        {inStock && (
          <div
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              backgroundColor: '#16a34a',
              color: 'white',
              fontSize: '11px',
              fontWeight: 600,
              padding: '4px 8px',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <CheckCircle style={{ width: '12px', height: '12px' }} />
            Mavjud
          </div>
        )}
      </div>

      <div style={{ padding: '20px' }}>
        {/* Nomi */}
        <h3
          style={{
            fontWeight: 600,
            fontSize: '15px',
            color: '#111827',
            marginBottom: '8px',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            lineHeight: '1.4',
            minHeight: '42px',
          }}
        >
          {book.name}
        </h3>

        {/* Barcode */}
        <p
          style={{
            fontSize: '12px',
            color: '#9ca3af',
            marginBottom: '12px',
          }}
        >
          Kod: {book.barcode || book.sku}
        </p>

        {/* Narx */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '12px',
          }}
        >
          <span
            style={{
              fontSize: '20px',
              fontWeight: 700,
              color: '#0284c7',
            }}
          >
            {formatPrice(book.retailPrice)}
          </span>
        </div>

        {/* Mavjudlik */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '13px',
            color: inStock ? '#16a34a' : '#dc2626',
            backgroundColor: inStock ? '#f0fdf4' : '#fef2f2',
            padding: '8px 12px',
            borderRadius: '8px',
          }}
        >
          {inStock ? (
            <>
              <Package style={{ width: '16px', height: '16px' }} />
              <span style={{ fontWeight: 500 }}>{book.quantity} dona mavjud</span>
            </>
          ) : (
            <>
              <XCircle style={{ width: '16px', height: '16px' }} />
              <span style={{ fontWeight: 500 }}>Mavjud emas</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
