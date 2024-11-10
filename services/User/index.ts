/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/AxiosInstance";

// GET ME ROUTE
export const getMe = async () => {
  try {
    const { data } = await axiosInstance.get("/user/userInfo/me");

    return data;
  } catch (error: any) {
    console.error("Axios Error", error);

    if (error.response) {
      const errorMessage = error.response.data?.message || "Failed to get me";

      return { error: errorMessage };
    }
    return { error: error.message || "An unknown error occurred." };
  }
};

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

// GET ALL POSY BY A USER
export const getAllPostsByUserId = async (userId: string) => {
  try {
    const { data } = await axiosInstance.get(`/user/${userId}`);

    return data;
  } catch (error: any) {
    console.error("Axios Error", error);

    if (error.response) {
      const errorMessage =
        error.response.data?.message || "Failed to Find User Post";
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

// PROFILE PHOTO UPLOAD
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

// VERIFY USER
export const verifyUser = async () => {
  try {
    const { data } = await axiosInstance.post("/user/verify");

    return data;
  } catch (error: any) {
    console.error("Axios Error", error);

    // If error response exists, extract error message
    if (error.response) {
      const errorMessage =
        error.response.data?.message || "Failed to User Verified.";

      return { error: errorMessage };
    }

    // For any other errors, return generic message
    return { error: error.message || "An unknown error occurred." };
  }
};

// FOLLOW USER
export const followUser = async (targetedUserId: string) => {
  try {
    const { data } = await axiosInstance.post("/user/follow", {
      targetUserId: targetedUserId,
    });

    return data;
  } catch (error: any) {
    console.error("Axios Error", error);

    // If error response exists, extract error message
    if (error.response) {
      const errorMessage =
        error.response.data?.message || "Failed to User Follow.";

      return { error: errorMessage };
    }

    // For any other errors, return generic message
    return { error: error.message || "An unknown error occurred." };
  }
};
