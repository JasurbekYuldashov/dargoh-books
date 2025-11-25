export interface Book {
  id: string;
  externalId: string;
  name: string;
  sku: string;
  barcode: string;
  retailPrice: number;
  supplyPrice: number;
  description: string;
  quantity: number;
  supplierName: string;
  shopName: string;
  createdAt: Date;
  updatedAt: Date;
  syncedAt: Date;
}

export interface BookFilters {
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  page?: number;
  limit?: number;
}

export interface PaginatedBooks {
  books: Book[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
