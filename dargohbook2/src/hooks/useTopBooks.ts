'use client';

import { useState, useEffect } from 'react';

interface TopBook {
  name: string;
  rank: number;
}

export function useTopBooks() {
  const [books, setBooks] = useState<TopBook[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/top-books');
        const data = await response.json();
        setBooks(data.books || []);
      } catch (error) {
        console.error('Top books fetch error:', error);
        setBooks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { books, loading };
}
