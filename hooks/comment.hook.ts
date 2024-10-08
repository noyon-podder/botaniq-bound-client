/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from "@tanstack/react-query";
import { useToast } from "./use-toast";
import { IComment } from "@/types";
import { createComment, getAllComment } from "@/services/Comments";
import { queryClient } from "@/lib/Provider";

// GET ALL COMMENT
export const useGetAllComment = (postId: string) => {
  return useQuery({
    queryKey: ["COMMENT", postId],
    queryFn: async () => await getAllComment(postId),
  });
};

// create new comment
export const useCreateComment = () => {
  const { toast } = useToast();

  return useMutation({
    mutationKey: ["COMMENT"],
    mutationFn: async (commentData: IComment) => {
      const response = await createComment(commentData);
      if (response.error) throw new Error(response.error);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["SINGLE_POST"] });
      toast({
        title: "Comment Post Success",
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
