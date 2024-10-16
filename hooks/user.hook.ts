/* eslint-disable @typescript-eslint/no-explicit-any */
// get single user
"use client";

import {
  coverPhotoUpload,
  getAllPostsByUserId,
  getSingleUser,
  profilePictureUpload,
  verifyUser,
} from "@/services/User";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useToast } from "./use-toast";
import { queryClient } from "@/lib/Provider";
import { useRouter } from "next/navigation";

// USER GET SINGLE USER
export const useGetSingleUser = (id: string) => {
  return useQuery({
    queryKey: ["SINGLE_USER"],
    queryFn: async () => await getSingleUser(id),
    staleTime: 10000,
    refetchOnWindowFocus: true,
    refetchInterval: 5000,
  });
};

// GET ALL POSTS BY USER  ID
export const useGetAllPostsByUserId = (userId: string) => {
  return useQuery({
    queryKey: ["POST"],
    queryFn: async () => await getAllPostsByUserId(userId),
  });
};

// COVER PHOTO UPLOAD
export const useCoverPhotoUpload = () => {
  const { toast } = useToast();

  return useMutation({
    mutationKey: ["COVER_UPLOAD"],
    mutationFn: async (image: FormData) => {
      const response = await coverPhotoUpload(image);
      if (response.error) throw new Error(response.error);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["SINGLE_USER", "POST"] });
      toast({
        title: "Cover Photo Upload Successfully",
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

// profile photo upload}
export const useProfilePictureUpload = () => {
  const { toast } = useToast();

  return useMutation({
    mutationKey: ["PROFILE"],
    mutationFn: async (image: FormData) => {
      const response = await profilePictureUpload(image);
      if (response.error) throw new Error(response.error);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["SINGLE_USER", "POST"],
      });
      toast({
        title: "Profile Picture Upload Successfully",
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

// VERIFIED USER
export const useVerifiedUser = () => {
  const { toast } = useToast();
  const router = useRouter();

  return useMutation({
    mutationKey: ["PROFILE"],
    mutationFn: async () => {
      const response = await verifyUser();
      if (response.error) throw new Error(response.error);

      console.log("Verified User", response);
      router.push(response?.data?.payment_url);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["SINGLE_USER", "POST"],
      });
      toast({
        title: "User Verified Successfully",
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
