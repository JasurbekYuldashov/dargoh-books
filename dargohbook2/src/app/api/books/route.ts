import { NextRequest, NextResponse } from 'next/server';
import { getBooks } from '@/services';
import { BookFilters } from '@/types';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    const filters: BookFilters = {
      search: searchParams.get('search') || undefined,
      minPrice: searchParams.get('minPrice') ? Number(searchParams.get('minPrice')) : undefined,
      maxPrice: searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : undefined,
      inStock: searchParams.get('inStock') === 'true',
      page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
      limit: searchParams.get('limit') ? Number(searchParams.get('limit')) : 20,
    };

    const result = await getBooks(filters);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Books API error:', error);
    return NextResponse.json(
      { error: 'Kitoblarni yuklashda xatolik yuz berdi' },
      { status: 500 }
    );
  }
}
