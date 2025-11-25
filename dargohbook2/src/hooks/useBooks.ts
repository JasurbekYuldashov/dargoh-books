'use client';

import { useState, useEffect, useCallback } from 'react';
import { Book, BookFilters, PaginatedBooks } from '@/types';

interface UseBooksResult {
  books: Book[];
  total: number;
  totalPages: number;
  isLoading: boolean;
  error: string | null;
  filters: BookFilters;
  setFilters: (filters: BookFilters) => void;
  refetch: () => Promise<void>;
}

const DEFAULT_FILTERS: BookFilters = {
  search: '',
  minPrice: undefined,
  maxPrice: undefined,
  inStock: false,
  page: 1,
  limit: 20,
};

export function useBooks(initialFilters?: Partial<BookFilters>): UseBooksResult {
  const [books, setBooks] = useState<Book[]>([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<BookFilters>({
    ...DEFAULT_FILTERS,
    ...initialFilters,
  });

  const fetchBooks = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams();

      if (filters.search) params.set('search', filters.search);
      if (filters.minPrice) params.set('minPrice', String(filters.minPrice));
      if (filters.maxPrice) params.set('maxPrice', String(filters.maxPrice));
      if (filters.inStock) params.set('inStock', 'true');
      if (filters.page) params.set('page', String(filters.page));
      if (filters.limit) params.set('limit', String(filters.limit));

      const response = await fetch(`/api/books?${params.toString()}`);

      if (!response.ok) {
        throw new Error('Kitoblarni yuklashda xatolik');
      }

      const data: PaginatedBooks = await response.json();

      setBooks(data.books);
      setTotal(data.total);
      setTotalPages(data.totalPages);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Noma\'lum xato');
    } finally {
      setIsLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return {
    books,
    total,
    totalPages,
    isLoading,
    error,
    filters,
    setFilters,
    refetch: fetchBooks,
  };
}
