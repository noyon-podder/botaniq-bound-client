/* eslint-disable @typescript-eslint/no-explicit-any */
import { loginUser, registerUser } from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { useToast } from "./use-toast";

export const useRegistration = () => {
  const { toast } = useToast();

  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => {
      const response = await registerUser(userData);
      if (response.error) throw new Error(response.error);
      return response;
    },
    onSuccess: () => {
      toast({
        description: "User created successfully.",
      });
    },
    onError: (error: any) => {
      console.log("Error Message", error);

      toast({
        variant: "destructive",
        description: error.message || "An unknown error occurred.",
      });
    },
  });
};

export const useUserLogin = () => {
  const { toast } = useToast();

  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => {
      const response = await loginUser(userData);
      if (response.error) throw new Error(response.error);
      return response;
    },
    onSuccess: () => {
      toast({
        description: "User Login successfully.",
      });
    },
    onError: (error: any) => {
      console.log("Error Message", error);

      toast({
        variant: "destructive",
        description: error.message || "An unknown error occurred.",
      });
    },
  });
};
