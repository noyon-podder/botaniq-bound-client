/* eslint-disable @typescript-eslint/no-explicit-any */
import { registerUser } from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { useToast } from "./use-toast";

export const useRegistration = () => {
  const { toast } = useToast();
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => await registerUser(userData),
    onSuccess: () => {
      toast({
        variant: "destructive",
        description: "User Create SuccessFully.",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        description: error.message,
      });
    },
  });
};
