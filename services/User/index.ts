/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/AxiosInstance";

// GET CURRENT USER
export const getSingleUser = async (email: string) => {
  try {
    const { data } = await axiosInstance.get(
      `/user/single-user?email=${email}`
    );

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
