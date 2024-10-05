/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/AxiosInstance";
import { revalidateTag } from "next/cache";

// Create Post
export const createPost = async (postData: FormData) => {
  try {
    const { data } = await axiosInstance.post("/post", postData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    revalidateTag("posts");
    return data;
  } catch (error: any) {
    console.error("Axios Error", error);

    if (error.response) {
      const errorMessage =
        error.response.data?.message || "Failed to create post.";
      return { error: errorMessage };
    }

    return { error: error.message || "An unknown error occurred." };
  }
};
