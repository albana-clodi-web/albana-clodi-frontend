import axios from "axios";
const apiUrl = import.meta.env.VITE_API_BASE_URL;

export type UserProfile = {
  id: string;
  email: string;
  fullname: string;
  role: "ADMIN" | "SUPERADMIN";
};

export type RequestEditUserProfile = {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string ;
};

type ResponseSucces = {
  success: boolean;
  message: string;
  responseObject?: UserProfile;
  statusCode?: number;
};

export async function getUserProfile(token: string): Promise<ResponseSucces> {
  try {
    const { data } = await axios.get(`${apiUrl}/auth/current`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    let message = "Terjadi kesalahan";
    if (axios.isAxiosError(error)) {
      if (error.response) {
        message = error.response.data.message;
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

export async function editUserProfile(
  credentials: RequestEditUserProfile
): Promise<ResponseSucces> {
  try {
    const token = localStorage.getItem("token");
    const { data } = await axios.patch(`${apiUrl}/auth/me`, credentials, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    let message = "Terjadi kesalahan";
    if (axios.isAxiosError(error)) {
      if (error.response) {
        message = error.response.data.message;
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
