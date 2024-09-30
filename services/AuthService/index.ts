/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/AxiosInstance";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

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

    // If error response exists, extract error message
    if (error.response) {
      const errorMessage =
        error.response.data?.message || "Failed to register.";
      return { error: errorMessage };
    }

    // For any other errors, return generic message
    return { error: error.message || "An unknown error occurred." };
  }
};

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
