"use server";

/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "@/lib/AxiosInstance";
import { IComment } from "@/types";

// Create Comment
export const createComment = async (commentData: IComment) => {
  const { postId, authorId, content } = commentData;
  try {
    const { data } = await axiosInstance.post(`comment/${postId}/add-comment`, {
      authorId,
      content,
    });

    return data;
  } catch (error: any) {
    console.error("Axios Error", error);

    if (error.response) {
      const errorMessage =
        error.response.data?.message || "Failed to create Comment.";
      return { error: errorMessage };
    }

    return { error: error.message || "An unknown error occurred." };
  }
};

// get all COmment
export const getAllComment = async (postId: string) => {
  try {
    const { data } = await axiosInstance.get(`/comment/${postId}/comments`);

    return data;
  } catch (error: any) {
    console.error("Axios Error", error);

    if (error.response) {
      const errorMessage =
        error.response.data?.message || "Failed to Get Comment.";
      return { error: errorMessage };
    }

    return { error: error.message || "An unknown error occurred." };
  }
};

// Update COMMENT
export const updateComment = async (updateCommentData: {
  commentId: string;
  content: string;
}) => {
  const { commentId, content } = updateCommentData;
  try {
    const { data } = await axiosInstance.put(`/comment/${commentId}`, {
      content,
    });

    return data;
  } catch (error: any) {
    console.error("Axios Error", error);

    if (error.response) {
      const errorMessage =
        error.response.data?.message || "Failed to Update Comment.";
      return { error: errorMessage };
    }

    return { error: error.message || "An unknown error occurred." };
  }
};

// DELETE COMMENT
export const deleteComment = async (commentId: string) => {
  try {
    const { data } = await axiosInstance.delete(`/comment/${commentId}`);

    return data;
  } catch (error: any) {
    console.error("Axios Error", error);

    if (error.response) {
      const errorMessage =
        error.response.data?.message || "Failed to Delete Comment.";
      return { error: errorMessage };
    }

    return { error: error.message || "An unknown error occurred." };
  }
};
