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

// GET ALL POST FOR ALL USERS
export const getAllPost = async () => {
  try {
    const { data } = await axiosInstance.get(`/post`);

    return data;
  } catch (error: any) {
    console.error("Axios Error", error);

    if (error.response) {
      const errorMessage =
        error.response.data?.message || "Failed to Retrieve Post";
      return { error: errorMessage };
    }

    return { error: error.message || "An unknown error occurred." };
  }
};

//  GET POST BY ID
export const getPostById = async (postId: string) => {
  try {
    const { data } = await axiosInstance.get(`/post/${postId}`);

    return data;
  } catch (error: any) {
    console.error("Axios Error", error);

    if (error.response) {
      const errorMessage =
        error.response.data?.message || "Failed to Retrieve Post";
      return { error: errorMessage };
    }

    return { error: error.message || "An unknown error occurred." };
  }
};

// Upvote POst
export const upvotePost = async (id: string) => {
  try {
    const { data } = await axiosInstance.post(`/post/${id}/upvote`);

    return data;
  } catch (error: any) {
    console.error("Axios Error", error);

    if (error.response) {
      const errorMessage =
        error.response.data?.message || "Failed to create upvotes.";
      return { error: errorMessage };
    }

    return { error: error.message || "An unknown error occurred." };
  }
};

// DOWNVOTE POst
export const downvotePost = async (id: string) => {
  try {
    const { data } = await axiosInstance.post(`/post/${id}/downvote`);

    return data;
  } catch (error: any) {
    console.error("Axios Error", error);

    if (error.response) {
      const errorMessage =
        error.response.data?.message || "Failed to create downvote.";
      return { error: errorMessage };
    }

    return { error: error.message || "An unknown error occurred." };
  }
};
