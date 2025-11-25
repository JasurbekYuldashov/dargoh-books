'use client';

import { Book } from '@/types';
import { BookCard } from './BookCard';
import { BookOpen } from 'lucide-react';

interface BookGridProps {
  books: Book[];
}

export function BookGrid({ books }: BookGridProps) {
  if (books.length === 0) {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: '80px 20px',
          animation: 'fadeInUp 0.5s ease-out',
        }}
      >
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: '#f3f4f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
          }}
        >
          <BookOpen style={{ width: '40px', height: '40px', color: '#9ca3af' }} />
        </div>
        <p style={{ fontSize: '18px', color: '#374151', fontWeight: 500 }}>
          Kitoblar topilmadi
        </p>
        <p style={{ marginTop: '8px', color: '#9ca3af' }}>
          Qidiruv so'zini o'zgartiring yoki filtrlarni tozalang
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: '20px',
      }}
    >
      {books.map((book, index) => (
        <BookCard key={book.id} book={book} index={index} />
      ))}
    </div>
  );
}
