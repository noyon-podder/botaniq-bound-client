/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/AxiosInstance";
import { TResetPassword } from "@/types";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

// REGISTER A NEW USER
export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", userData);

    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }
    return data;
  } catch (error: any) {
    console.error("Axios Error", error);

    if (error.response) {
      const errorMessage =
        error.response.data?.message || "Failed to register.";
      return { error: errorMessage };
    }

    return { error: error.message || "An unknown error occurred." };
  }
};

// LOGIN USER WITH EMAIL AND PASSWORD
export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", userData);

    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    console.error("Axios Error", error);

    // If error response exists, extract error message
    if (error.response) {
      const errorMessage = error.response.data?.message || "Failed to Login.";
      return { error: errorMessage };
    }

    // For any other errors, return generic message
    return { error: error.message || "An unknown error occurred." };
  }
};
// GET CURRENT USER
export const getCurrentUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;

  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);

    return {
      _id: decodedToken.userId,
      name: decodedToken.name,
      email: decodedToken.email,
      role: decodedToken.role,
      status: decodedToken.status,
    };
  }

  return decodedToken;
};

//  FORGOT PASSWORD HANDLE API CALLING
export const forgotPassword = async (email: string) => {
  try {
    const { data } = await axiosInstance.post("/auth/forget-password", email);

    return data;
  } catch (error: any) {
    console.error("Axios Error", error);

    if (error.response) {
      const errorMessage =
        error.response.data?.message || "Failed to Find user.";
      return { error: errorMessage };
    }

    return { error: error.message || "An unknown error occurred." };
  }
};

//  RESET PASSWORD HANDLE API CALLING
export const resetPassword = async (payload: TResetPassword) => {
  const { email, newPassword, token } = payload;

  const resetPasswordData = {
    email,
    newPassword,
  };
  try {
    const { data } = await axiosInstance.post(
      "/auth/reset-password", // Make sure this is the correct endpoint
      resetPasswordData, // Payload containing email and newPassword
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`, // Ensure token is passed correctly
        },
      }
    );

    return data;
  } catch (error: any) {
    console.error("Axios Error", error);

    // If error response exists, extract error message
    if (error.response) {
      const errorMessage =
        error.response.data?.message || "Failed to Change Password.";
      return { error: errorMessage };
    }

    // For any other errors, return generic message
    return { error: error.message || "An unknown error occurred." };
  }
};

// GET NEW ACCESS TOKEN
export const getNewAccessToken = async () => {
  try {
    const refreshToken = cookies().get("refreshToken")?.value;

    const res = await axiosInstance({
      url: "/auth/refresh-token",
      method: "POST",
      withCredentials: true,
      headers: {
        cookie: `refreshToken=${refreshToken}`,
      },
    });

    return res.data;
  } catch (error: any) {
    console.error("Axios Error", error);

    if (error.response) {
      const errorMessage =
        error.response.data?.message || "Failed to refresh token.";
      return { error: errorMessage };
    }

    return { error: error.message || "An unknown error occurred." };
  }
};
//LOGOUT USER
export const logout = () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
};
