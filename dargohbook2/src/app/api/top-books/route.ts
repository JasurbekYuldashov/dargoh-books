import { NextResponse } from 'next/server';
import { fetchTopBooks } from '@/services/billz-top-books';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    // Faqat kitob nomlarini qaytaradi - summalar yo'q
    const topBooks = await fetchTopBooks(10);

    return NextResponse.json({ books: topBooks });
  } catch (error) {
    console.error('Top books API error:', error);
    return NextResponse.json({ books: [] });
  }
}
