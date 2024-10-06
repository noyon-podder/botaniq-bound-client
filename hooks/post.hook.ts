/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { useToast } from "./use-toast";
import { createPost, upvotePost } from "@/services/Post";
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
