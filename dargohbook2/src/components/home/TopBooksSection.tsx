'use client';

import { useTopBooks } from '@/hooks';
import { TrendingUp, BookOpen } from 'lucide-react';
import { AnimatedSection } from '@/components/animations';
import Link from 'next/link';

export function TopBooksSection() {
  const { books, loading } = useTopBooks();

  if (loading) {
    return (
      <section style={{ backgroundColor: 'white', padding: '60px 16px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                border: '3px solid #e5e7eb',
                borderTopColor: '#0284c7',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
              }}
            />
          </div>
        </div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </section>
    );
  }

  if (books.length === 0) {
    return null;
  }

  return (
    <section style={{ backgroundColor: 'white', padding: '60px 16px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <AnimatedSection animation="fadeInUp">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#fef3c7',
                padding: '8px 16px',
                borderRadius: '50px',
                marginBottom: '16px',
              }}
            >
              <TrendingUp style={{ width: '18px', height: '18px', color: '#d97706' }} />
              <span style={{ color: '#92400e', fontSize: '14px', fontWeight: 600 }}>
                Bugun eng ko'p sotilgan
              </span>
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#111827' }}>
              Mashhur kitoblar
            </h2>
          </div>
        </AnimatedSection>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '16px',
          }}
        >
          {books.map((book, index) => (
            <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.05}>
              <Link
                href="/kitoblar"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px 20px',
                  backgroundColor: index === 0 ? '#fffbeb' : '#f9fafb',
                  borderRadius: '16px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  border: index === 0 ? '2px solid #fcd34d' : '1px solid #f3f4f6',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    backgroundColor: index === 0 ? '#fcd34d' : index < 3 ? '#e5e7eb' : '#f3f4f6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {index === 0 ? (
                    <span style={{ fontSize: '18px' }}>🏆</span>
                  ) : (
                    <span
                      style={{
                        fontWeight: 700,
                        fontSize: '16px',
                        color: index < 3 ? '#374151' : '#9ca3af',
                      }}
                    >
                      {book.rank}
                    </span>
                  )}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    style={{
                      fontSize: '15px',
                      fontWeight: 500,
                      color: '#111827',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {book.name}
                  </p>
                </div>
                <BookOpen
                  style={{
                    width: '20px',
                    height: '20px',
                    color: '#9ca3af',
                    flexShrink: 0,
                  }}
                />
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
