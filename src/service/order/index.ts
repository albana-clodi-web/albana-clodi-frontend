import axios from "axios";
import { TReceiptData, TReceiptResponse } from "./order.type";

const apiUrl = import.meta.env.VITE_API_BASE_URL;
const token = localStorage.getItem("token") || "";

export async function getReceiptByOrderId(
  id: string
): Promise<TReceiptResponse> {
  try {
    const { data } = await axios.get<TReceiptResponse>(
      `${apiUrl}/receipts/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true",
        },
      }
    );

    return data;
  } catch (error) {
    let message = "Terjadi kesalahan saat mengambil data resi";

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
      statusCode: 500,
      responseObject: {} as TReceiptData,
    };
  }
}
