import axios from "axios";
const apiUrl = import.meta.env.VITE_API_BASE_URL;
const token = localStorage.getItem("token");

type ProductPrice = {
  normal: number;
  buy: number;
  reseller: number;
  agent: number;
  member: number;
};

type ProductWholesaler = {
  lowerLimitItem: number;
  upperLimitItem: number;
  unitPrice: number;
  wholesalerPrice: number;
};

type ProductVariant = {
  imageUrl: string;
  sku: string;
  productPrices: ProductPrice;
  productWholesalers: ProductWholesaler[];
  barcode?: string;
  size?: string;
  color?: string;
  stock: number | null;
};

type Product = {
  name: string;
  description: string;
  type: string;
  isPublish: boolean;
  weight: number;
};

type CreateProductRequest = {
  product: Product;
  categoryId: string;
  productVariants: ProductVariant[];
};

type Category = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

type ProductNew = {
  id: string;
  categoryId: string;
  name: string;
  type: string;
  description: string;
  weight: number;
  isPublish: boolean;
  createdAt: string; // atau Date
  updatedAt: string;
  category: Category;
};

type Variant = {
  id: string;
  productId: string;
  sku: string;
  stock: number;
  size: string;
  color: string;
  imageUrl: string;
  barcode: string | null;
  createdAt: string; // atau Date
  updatedAt: string;
};

type Price = {
  id: string;
  productVariantId: string;
  normal: number;
  buy: number;
  reseller: number;
  agent: number;
  member: number;
  createdAt: string; // atau Date
  updatedAt: string;
};

type ProductResponse = {
  data: ArrayProduct[];
  meta: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
  };
};

export type ArrayProduct = {
  product: ProductNew;
  variant: Variant;
  price: Price;
};

type ResponseSucces = {
  success: boolean;
  message: string;
  responseObject?: ProductResponse;
  statusCode?: number;
};

export async function createProduct(
  credentials: CreateProductRequest
): Promise<ResponseSucces> {
  try {
    console.log(credentials);
    const response = await axios.post(`${apiUrl}/products`, credentials, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return {
      success: true,
      message: response.data.message ?? "Produk berhasil ditambahkan",
      responseObject: response.data,
    };
  } catch (error) {
    let message = "Terjadi kesalahan";
    if (axios.isAxiosError(error)) {
      if (error.response) {
        message = error.response.data.message || "Gagal menambakan produk";
      } else if (error.request) {
        message = "Tidak dapat menghubungi server";
      } else {
        message = error.message;
      }
    } else {
      message = (error as Error).message;
    }

    return {
      success: false,
      message,
    };
  }
}

export async function getProducts(): Promise<ResponseSucces> {
  try {
    const { data } = await axios.get(`${apiUrl}/products`, {
      headers: {
        "ngrok-skip-browser-warning": "true",
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    let message = "Terjadi kesalahan saat mengambil produk";

    if (axios.isAxiosError(error)) {
      message =
        error.response?.data?.message ||
        (error.request ? "Tidak dapat menghubungi server" : error.message);
    } else {
      message = (error as Error).message;
    }

    return {
      success: false,
      message,
    };
  }
}
