/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/AxiosInstance";

// GET CURRENT USER
export const getSingleUser = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/user/single-user/${id}`);

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

// COVER PHOTO UPLOAD
export const coverPhotoUpload = async (image: FormData) => {
  try {
    const { data } = await axiosInstance.put("/user/cover-photo", image);

    return data;
  } catch (error: any) {
    console.error("Axios Error", error);

    // If error response exists, extract error message
    if (error.response) {
      const errorMessage =
        error.response.data?.message || "Failed to Upload Image.";
      return { error: errorMessage };
    }

    // For any other errors, return generic message
    return { error: error.message || "An unknown error occurred." };
  }
};

// COVER PHOTO UPLOAD
export const profilePictureUpload = async (image: FormData) => {
  try {
    const { data } = await axiosInstance.put("/user/profile-picture", image);

    return data;
  } catch (error: any) {
    console.error("Axios Error", error);

    // If error response exists, extract error message
    if (error.response) {
      const errorMessage =
        error.response.data?.message || "Failed to Upload Image.";
      return { error: errorMessage };
    }

    // For any other errors, return generic message
    return { error: error.message || "An unknown error occurred." };
  }
};
