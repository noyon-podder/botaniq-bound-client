/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  forgotPassword,
  loginUser,
  registerUser,
  resetPassword,
} from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { useToast } from "./use-toast";

// REGISTER USER HOOK
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
        title: "User created successfully.",
      });
    },
    onError: (error: any) => {
      console.error("Error Message", error);

      toast({
        variant: "destructive",
        title: error.message || "An unknown error occurred.",
      });
    },
  });
};

// LOGIN USER  HOOK
export const useUserLogin = () => {
  const { toast } = useToast();

  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) => {
      const response = await loginUser(userData);
      if (response.error) throw new Error(response.error);

      console.log({ response });
      return response;
    },
    onSuccess: () => {
      toast({
        title: "User Login successfully.",
      });
    },
    onError: (error: any) => {
      console.error("Error Message", error);

      toast({
        variant: "destructive",
        title: error.message || "An unknown error occurred.",
      });
    },
  });
};

// FORGOT PASSWORD HOOK
export const useForgotPassword = () => {
  const { toast } = useToast();

  return useMutation({
    mutationKey: ["FORGOT_PASSWORD"],
    mutationFn: async (email: string) => {
      const response = await forgotPassword(email);
      if (response.error) throw new Error(response.error);
      return response;
    },
    onSuccess: () => {
      toast({
        title: "Check Your Email!!",
      });
    },
    onError: (error: any) => {
      console.error("Error Message", error);

      toast({
        variant: "destructive",
        title: error.message || "An unknown error occurred.",
      });
    },
  });
};

// FORGOT PASSWORD HOOK
export const useResetPassword = () => {
  const { toast } = useToast();

  return useMutation({
    mutationKey: ["RESET_PASSWORD"],
    mutationFn: async (payload: {
      email: string | null;
      newPassword: string;
      token: string | null;
    }) => {
      const response = await resetPassword(payload);
      if (response.error) throw new Error(response.error);
      return response;
    },
    onSuccess: () => {
      toast({
        title: "Password Reset Successfully",
      });
    },
    onError: (error: any) => {
      console.error("Error Message", error);

      toast({
        variant: "destructive",
        title: error.message || "An unknown error occurred.",
      });
    },
  });
};
