export interface BillzAuthResponse {
  code: number;
  message: string;
  error: string | null;
  data: {
    token: {
      access_token: string;
      refresh_token: string;
      expires_at: string;
      refresh_in_seconds: number;
    };
    user: {
      id: string;
      company_id: string;
      phone: string;
    };
  };
}

export interface BillzProduct {
  id: string;
  company_id: string;
  name: string;
  sku: string;
  barcode: string;
  retail_price: number;
  supply_price: number;
  description: string;
  measurement_values: {
    total_measurement_value: number;
    total_active_measurement_value: number;
  };
  suppliers: Array<{
    id: string;
    name: string;
  }>;
  product_supply_stock: Array<{
    shop_id: string;
    shop_name: string;
    measurement_value: number;
    active_measurement_value: number;
  }>;
  created_at: string;
  updated_at: string;
}

export interface BillzProductsResponse {
  count: number;
  total: number;
  products: BillzProduct[];
}
