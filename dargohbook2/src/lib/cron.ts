import { syncBooks } from '@/services';

let syncInterval: NodeJS.Timeout | null = null;
let isInitialized = false;

const SYNC_INTERVAL_MS = 30 * 60 * 1000; // 30 daqiqa

async function runSync() {
  try {
    console.log(`[${new Date().toISOString()}] Avtomatik sinxronizatsiya boshlandi...`);
    await syncBooks();
    console.log(`[${new Date().toISOString()}] Avtomatik sinxronizatsiya yakunlandi`);
  } catch (error) {
    console.error(`[${new Date().toISOString()}] Avtomatik sinxronizatsiya xatoligi:`, error);
  }
}

export function startCronJob() {
  if (isInitialized) {
    console.log('Cron job allaqachon ishga tushirilgan');
    return;
  }

  console.log('Cron job ishga tushirilmoqda (har 30 daqiqada)...');

  // Darhol birinchi sinxronizatsiyani bajarish
  runSync();

  // Keyingi sinxronizatsiyalarni rejalashtirish
  syncInterval = setInterval(runSync, SYNC_INTERVAL_MS);
  isInitialized = true;

  console.log('Cron job muvaffaqiyatli ishga tushirildi');
}

export function stopCronJob() {
  if (syncInterval) {
    clearInterval(syncInterval);
    syncInterval = null;
    isInitialized = false;
    console.log('Cron job to\'xtatildi');
  }
}
