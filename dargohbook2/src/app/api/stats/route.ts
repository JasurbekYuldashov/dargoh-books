import { NextResponse } from 'next/server';
import { getBookStats } from '@/services';

export async function GET() {
  try {
    const stats = await getBookStats();
    return NextResponse.json(stats);
  } catch (error) {
    console.error('Stats API error:', error);
    return NextResponse.json(
      { error: 'Statistikani olishda xatolik' },
      { status: 500 }
    );
  }
}
