import { NextResponse } from 'next/server';
import { syncBooks, getLastSyncLog } from '@/services';

export async function POST() {
  try {
    const result = await syncBooks();
    return NextResponse.json({
      success: true,
      message: 'Sinxronizatsiya muvaffaqiyatli yakunlandi',
      data: result,
    });
  } catch (error) {
    console.error('Sync API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Sinxronizatsiyada xatolik yuz berdi',
        message: error instanceof Error ? error.message : 'Noma\'lum xato',
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const lastSync = await getLastSyncLog();
    return NextResponse.json({
      lastSync: lastSync ? {
        id: lastSync.id,
        totalBooks: lastSync.totalBooks,
        newBooks: lastSync.newBooks,
        updatedBooks: lastSync.updatedBooks,
        status: lastSync.status,
        durationMs: lastSync.durationMs,
        createdAt: lastSync.createdAt,
      } : null,
    });
  } catch (error) {
    console.error('Sync status API error:', error);
    return NextResponse.json(
      { error: 'Sinxronizatsiya holatini olishda xatolik' },
      { status: 500 }
    );
  }
}
