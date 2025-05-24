export interface TPrintSetting {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

export type SettingOptionValue = Record<string, string[]>;
export type SettingFeatureValue = Record<string, string[]>;

export interface TPreviewProps {
    features: string[]
    data?: TReceiptData
}

// Receipt Response Type
export interface TReceiptResponse {
  success: boolean;
  message: string;
  responseObject: TReceiptData;
  statusCode: number;
}

export interface TReceiptData {
  order_id: string;
  order_code: string;
  admin_name: string;
  order_date: string;
  tracking_number: string;
  payment_status: string;
  payment_method: string;
  products: TProduct[];
  total_items: number;
  total_product_price: number;
  final_price: number;
  notes: string;
  weight: number;
  discount: TDiscount;
  insurance_fee: number;
  packaging_fee: number;
  shipping_cost: number;
  shipping_name: string;
  shipping_type: string;
  shipping_service: string;
  sales_channel: string;
  delivery_place: string;
  delivery_target: string;
  customer_type: string;
  customer_info: TCustomerInfo;
}

export interface TProduct {
  product_name: string;
  product_qty: number;
  product_price: number;
  product_total: number;
  product_barcode: string;
  product_variants: TProductVariant[];
  price_type: string;
}

export interface TProductVariant {
  id: string;
  productId: string;
  sku: string;
  stock: number;
  size: string;
  color: string;
  imageUrl: string;
  barcode: string | null;
  createdAt: string;
  updatedAt: string;
  weight?: string;
  productPrices: TProductPrice[];
}

export interface TProductPrice {
  id: string;
  productVariantId: string;
  normal: number;
  buy: number;
  reseller: number;
  agent: number;
  member: number;
  createdAt: string;
  updatedAt: string;
}

export interface TDiscount {
  type: string;
  value: number;
  persen: number;
  nominal: number;
}

export interface TCustomerInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
}
