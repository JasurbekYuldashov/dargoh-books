import { getBillzToken } from './billz-auth';

export interface TopBook {
  name: string;
  rank: number;
}

interface BillzDashboardResponse {
  top_products: Array<{
    product_field: string;
    value: number;
  }>;
}

function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

export async function fetchTopBooks(limit: number = 10): Promise<TopBook[]> {
  try {
    const token = await getBillzToken();
    const dateStr = formatDate(new Date());

    const url = `https://dargox.billz.io/api/v1/dashboard-report?start_date=${dateStr}&detalization=hour&seller_field=sales_sum&currency=UZS&product_group_field=name&product_field=net_sales`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return [];
    }

    const data: BillzDashboardResponse = await response.json();

    // Faqat kitob nomlarini qaytaramiz - summalar YO'Q
    return data.top_products.slice(0, limit).map((product, index) => ({
      name: product.product_field,
      rank: index + 1,
    }));
  } catch (error) {
    console.error('Top books fetch error:', error);
    return [];
  }
}
