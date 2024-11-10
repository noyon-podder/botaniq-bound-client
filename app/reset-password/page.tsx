"use client";

import Loading from "@/components/shared/Loading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useResetPassword } from "@/hooks/auth.hook";
import { useRouter, useSearchParams } from "next/navigation";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInputs {
  email: string;
  newPassword: string;
  confirmPassword: string;
}

const SetNewPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormInputs>();

  const searchParams = useSearchParams();
  const router = useRouter();

  const email = searchParams.get("email");
  const token = searchParams.get("token");

  const {
    mutate: handleResetPassword,
    isPending,
    isSuccess,
  } = useResetPassword();

  // Handle form submission
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    // Password match validation
    if (data.newPassword !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
      return;
    }

    const passwordPayload = {
      email: email,
      newPassword: data.confirmPassword,
      token: token,
    };

    handleResetPassword(passwordPayload);
  };

  if (isSuccess) {
    router.push("/login");
  }
  return (
    <>
      {isPending && <Loading />}
      <div className="flex items-center justify-center h-screen">
        <div className="w-full flex items-center justify-center p-5">
          <div className="max-w-[500px] w-full py-10 px-6 border bg-accent  rounded-md">
            <div className="mb-5">
              <h2 className="text-center text-2xl  text-primary  font-bold">
                Reset Your Password
              </h2>
              <p className="text-center mt-3 text-gray-500 capitalize">
                Set new password for your account
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* new password */}
              <div>
                <Label
                  htmlFor="newPassword"
                  className="text-foreground font-medium capitalize"
                >
                  New Password
                </Label>
                <Input
                  id="newPassword"
                  type="password"
                  className={`mt-1 block bg-transparent dark:bg-transparent w-full p-2 border ${
                    errors.newPassword ? "border-red-500" : "border-gray-300"
                  } rounded-md`}
                  {...register("newPassword", {
                    required: "New password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                />
                {errors.newPassword && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.newPassword.message}
                  </p>
                )}
              </div>
              {/* Confirm Password Input */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium"
                >
                  Confirm Password
                </label>
                <Input
                  id="confirmPassword"
                  type="password"
                  className={`mt-1 block bg-transparent dark:bg-transparent w-full p-2 border ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-md`}
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                  })}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetNewPassword;
