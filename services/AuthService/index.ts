/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/AxiosInstance";
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
      _id: decodedToken._id,
      name: decodedToken.name,
      email: decodedToken.email,
      role: decodedToken.role,
      status: decodedToken.status,
    };
  }

  // console.log(object);

  return decodedToken;
};
