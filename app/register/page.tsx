"use client";

import LeafForm from "@/components/form/LeafForm";
import LeafInput from "@/components/form/LeafInput";
import { Button } from "@/components/ui/button";

import registerValidationSchema from "@/schemas/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const RegisterPage = () => {
  const handleLoginForm: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

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
              onSubmit={handleLoginForm}
              resolver={zodResolver(registerValidationSchema)}
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
                name="Password"
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
              <Link
                href="/register"
                className="text-primary hover:underline ml-2"
              >
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
