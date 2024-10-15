/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from "@tanstack/react-query";
import { useToast } from "./use-toast";
import {
  createPost,
  downvotePost,
  getAllPaidPost,
  getAllPost,
  getPostById,
  upvotePost,
} from "@/services/Post";
import { queryClient } from "@/lib/Provider";

// create new post
export const useCreatePost = () => {
  const { toast } = useToast();

  return useMutation({
    mutationKey: ["COVER_UPLOAD"],
    mutationFn: async (postData: FormData) => {
      const response = await createPost(postData);
      if (response.error) throw new Error(response.error);
      return response;
    },
    onSuccess: () => {
      toast({
        title: "Create New Post",
      });
    },
    onError: (error: any) => {
      console.log("Error Message", error);

      toast({
        variant: "destructive",
        title: error.message || "An unknown error occurred.",
      });
    },
  });
};

// Get All Post
export const useGetAllPost = () => {
  return useQuery({
    queryKey: ["POST"],
    queryFn: async () => await getAllPost(),
  });
};

// GET ALL PAID POST
export const useGetAllPaidPost = () => {
  return useQuery({
    queryKey: ["POST"],
    queryFn: async () => await getAllPaidPost(),
  });
};

// GET POST BY ID
export const useGetPostById = (postId: string) => {
  return useQuery({
    queryKey: ["SINGLE_POST"],
    queryFn: async () => await getPostById(postId),
  });
};

// UPVOTE
export const useUpVotes = () => {
  const { toast } = useToast();
  return useMutation({
    mutationKey: ["UPVOTE"],
    mutationFn: async (postId: string) => {
      const response = await upvotePost(postId);
      if (response.error) throw new Error(response.error);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["POST"] });
      toast({
        title: "Upvote Success",
      });
    },
    onError: (error: any) => {
      console.log("Error Message", error);

      toast({
        variant: "destructive",
        title: error.message || "An unknown error occurred.",
      });
    },
  });
};

// DOWNVOTE
export const useDownVotes = () => {
  const { toast } = useToast();
  return useMutation({
    mutationKey: ["UPVOTE"],
    mutationFn: async (postId: string) => {
      const response = await downvotePost(postId);
      if (response.error) throw new Error(response.error);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["POST"] });
      toast({
        title: "Action Success",
      });
    },
    onError: (error: any) => {
      console.log("Error Message", error);

      toast({
        variant: "destructive",
        title: error.message || "An unknown error occurred.",
      });
    },
  });
};
