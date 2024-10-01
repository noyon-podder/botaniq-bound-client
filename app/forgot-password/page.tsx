"use client";

import LeafForm from "@/components/form/LeafForm";
import LeafInput from "@/components/form/LeafInput";
import Loading from "@/components/shared/Loading";
import { Button } from "@/components/ui/button";
import { useForgotPassword } from "@/hooks/auth.hook";
import { useRouter } from "next/navigation";
import React from "react";

const ForgotPasswordPage = () => {
  const router = useRouter();
  const {
    mutate: handleForPassword,
    isSuccess,
    isPending,
  } = useForgotPassword();
  const handleForgotPasswordForm = (email: string) => {
    console.log("From forgot password", email);
    handleForPassword(email);
  };

  if (isSuccess) {
    router.push("/reset-password");
  }
  return (
    <>
      {isPending && <Loading />}
      <div className="flex items-center justify-center h-screen">
        <div className="w-full flex items-center justify-center p-5">
          <div className="max-w-[500px] w-full py-10 px-6 border bg-accent  rounded-md">
            <div className="mb-5">
              <h2 className="text-center text-2xl  text-primary  font-bold">
                Forgot Password
              </h2>
              <p className="text-center mt-3 text-gray-500 capitalize">
                Search Your account by email Address!
              </p>
            </div>
            <LeafForm onSubmit={handleForgotPasswordForm}>
              <LeafInput
                type="text"
                name="email"
                label="Email Address"
                className="bg-transparent dark:bg-transparent 
                focus:dark:border-primary"
                placeholder="Enter your email"
              />

              <Button type="submit" className="w-full mt-4">
                {" "}
                Submit
              </Button>
            </LeafForm>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
