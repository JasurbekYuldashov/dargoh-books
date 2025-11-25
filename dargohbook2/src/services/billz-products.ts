import { BillzProduct, BillzProductsResponse } from '@/types';
import { getBillzToken } from './billz-auth';

export async function fetchBillzProducts(): Promise<BillzProduct[]> {
  const token = await getBillzToken();
  const apiUrl = process.env.BILLZ_API_URL || 'https://dargox.billz.io/api/v2';

  const response = await fetch(`${apiUrl}/product-search-with-filters`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      status: 'all',
      order: [''],
      group_variations: false,
      product_field_filters: [],
      field_search_key: '',
      archived_list: false,
      brand_ids: [],
      plu_codes: [],
      supplier_ids: [],
      measurement_unit_ids: [],
      is_free_price: null,
      statistics: true,
      limit: 5000,
      page: 1,
    }),
  });

  if (!response.ok) {
    throw new Error(`Products fetch failed: ${response.status}`);
  }

  const data: BillzProductsResponse = await response.json();
  return data.products || [];
}
