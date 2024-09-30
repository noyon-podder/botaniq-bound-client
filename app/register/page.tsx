"use client";

import LeafForm from "@/components/form/LeafForm";
import LeafInput from "@/components/form/LeafInput";
import { Button } from "@/components/ui/button";
import { useRegistration } from "@/hooks/auth.hook";

import { zodResolver } from "@hookform/resolvers/zod";
import registerValidationSchema from "@/schemas/register.schema";

import Link from "next/link";
import React, { useEffect } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const {
    mutate: handleUserRegistration,
    isPending,
    isSuccess,
  } = useRegistration();
  const router = useRouter();

  const handleRegisterForm: SubmitHandler<FieldValues> = (data) => {
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    console.log("userData", userData);
    handleUserRegistration(userData);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      // if (redirect) {
      //   router.push(redirect);
      // } else {
      router.push("/");
      // }
    }
  }, [isSuccess, isPending, router]);

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="w-full flex items-center justify-center p-5">
          <div className="max-w-[500px] w-full py-10 px-6 border bg-accent  rounded-md">
            <div className="mb-5">
              <h2 className="text-center text-2xl  text-primary  font-bold">
                Create New Account
              </h2>
              <p className="text-center mt-3 text-gray-500">
                Provide your Email & Password{" "}
              </p>
            </div>
            <LeafForm
              resolver={zodResolver(registerValidationSchema)}
              onSubmit={handleRegisterForm}
            >
              <LeafInput
                type="text"
                name="name"
                label="Full name"
                className="bg-transparent dark:bg-transparent focus:dark:border-primary"
              />

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

              <Button type="submit" className="w-full mt-4">
                {" "}
                Submit
              </Button>
            </LeafForm>

            <p className="dark:text-color-darkHeading text-color-textColor mt-7 text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline ml-2">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
