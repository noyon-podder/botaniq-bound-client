"use client";

import LeafForm from "@/components/form/LeafForm";
import LeafInput from "@/components/form/LeafInput";
import Loading from "@/components/shared/Loading";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserProvider";
import { useUserLogin } from "@/hooks/auth.hook";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const defaultValue = {
  email: "nobosree@gmail.com",
  password: "123456",
};

const LoginPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setIsLoading: userLoginLoading } = useUser();
  const { mutate: handleUserLogin, isSuccess, isPending } = useUserLogin();

  const redirect = searchParams.get("redirect");

  const handleLoginForm: SubmitHandler<FieldValues> = (data) => {
    console.log(data);

    handleUserLogin(data);
    userLoginLoading(true);
  };

  // REDIRECT THE USER  AFTER LOGIN

  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
  }, [isPending, isSuccess, redirect, router]);
  return (
    <>
      {isPending && <Loading />}
      <div className="flex items-center justify-center h-screen">
        <div className="w-full flex items-center justify-center p-5">
          <div className="max-w-[500px] w-full py-10 px-6 border bg-accent  rounded-md">
            <div className="mb-5">
              <h2 className="text-center text-2xl  text-primary  font-bold">
                Login
              </h2>
              <p className="text-center mt-3 text-gray-500">
                Provide your Email & Password{" "}
              </p>
            </div>
            <LeafForm onSubmit={handleLoginForm} defaultValues={defaultValue}>
              <LeafInput
                type="text"
                name="email"
                label="Email"
                className="bg-transparent dark:bg-transparent focus:dark:border-primary"
              />
              <LeafInput
                type="password"
                name="password"
                label="Password"
                className="bg-transparent dark:bg-transparent"
              />
              <Link
                href="/forgot-password"
                className="text-primary flex items-center justify-end hover:underline"
              >
                Forgot Password
              </Link>

              <Button type="submit" className="w-full mt-4">
                {" "}
                Login
              </Button>
            </LeafForm>

            <p className="dark:text-color-darkHeading text-color-textColor mt-7 text-center">
              Create New Account{" "}
              <Link
                href="/register"
                className="text-primary hover:underline ml-2"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
