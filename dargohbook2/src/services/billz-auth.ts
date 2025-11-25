import { BillzAuthResponse } from '@/types';

interface TokenCache {
  accessToken: string;
  expiresAt: Date;
}

let tokenCache: TokenCache | null = null;

export async function getBillzToken(): Promise<string> {
  // Token hali ham aktiv bo'lsa, keshdan qaytarish
  if (tokenCache && tokenCache.expiresAt > new Date()) {
    return tokenCache.accessToken;
  }

  const apiUrl = process.env.BILLZ_API_URL || 'https://dargox.billz.io/api/v2';
  const platformId = process.env.BILLZ_PLATFORM_ID || '7d4a4c38-dd84-4902-b744-0488b80a4c01';
  const phone = process.env.BILLZ_PHONE || '+998951590102';
  const password = process.env.BILLZ_PASSWORD || 'sardor0102';

  const response = await fetch(`${apiUrl}/auth/standard/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'platform-id': platformId,
      'Referer': 'https://dargox.billz.io/login',
    },
    body: JSON.stringify({
      phone,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error(`Auth failed: ${response.status}`);
  }

  const data: BillzAuthResponse = await response.json();

  if (data.code !== 200 || !data.data?.token?.access_token) {
    throw new Error(data.error || 'Auth failed');
  }

  // Token 8 soatda eskiradi, 7 soat ichida yangilaymiz
  const expiresAt = new Date();
  expiresAt.setHours(expiresAt.getHours() + 7);

  tokenCache = {
    accessToken: data.data.token.access_token,
    expiresAt,
  };

  return tokenCache.accessToken;
}

export function clearTokenCache(): void {
  tokenCache = null;
}
