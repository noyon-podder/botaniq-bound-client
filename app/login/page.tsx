"use client";

import LeafForm from "@/components/form/LeafForm";
import LeafInput from "@/components/form/LeafInput";
import { Button } from "@/components/ui/button";
import { useUserInformation } from "@/context/UserInfoProvider";
import { useUserLogin } from "@/hooks/auth.hook";
import { LoaderCircleIcon, User, UserPlus } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const userDefaultValue = {
  email: "user@gmail.com",
  password: "123456",
};

const adminDefaultValue = {
  email: "noyon.podder7@gmail.com",
  password: "123456",
};

const LoginPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [role, setRole] = useState<"user" | "admin" | null>(null); // Initially null, no role selected
  const { setIsLoading: userInfoLoading } = useUserInformation();
  const { mutate: handleUserLogin, isSuccess, isPending } = useUserLogin();

  // Initialize the form with empty values (no default values initially)
  const { reset, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const redirect = searchParams.get("redirect");

  const handleLoginForm: SubmitHandler<FieldValues> = (data) => {
    console.log("Login Data: ", data);
    handleUserLogin(data);
    userInfoLoading(true);
  };

  // REDIRECT THE USER AFTER LOGIN
  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
  }, [isPending, isSuccess, redirect, router]);

  // Toggle between user and admin login
  const handleRoleToggle = (newRole: "user" | "admin") => {
    setRole(newRole); // Set the new role
    const defaultValues =
      newRole === "admin" ? adminDefaultValue : userDefaultValue;
    reset(defaultValues); // Reset the form with the correct default values based on the role
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full flex items-center justify-center p-5">
        <div className="max-w-[500px] w-full py-10 px-6 border bg-accent rounded-md">
          <div className="mb-5">
            <h2 className="text-center text-2xl text-primary font-bold">
              Login
            </h2>
            <p className="text-center mt-3 text-gray-500">
              Provide your Email & Password{" "}
            </p>
          </div>

          <LeafForm
            onSubmit={handleSubmit(handleLoginForm)}
            // Pass empty form values or reset the form when the role changes
            defaultValues={
              role === "admin"
                ? adminDefaultValue
                : role === "user"
                ? userDefaultValue
                : { email: "", password: "" }
            }
          >
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
              {isPending ? (
                <LoaderCircleIcon className="animate-spin size-7 text-white" />
              ) : (
                "Login"
              )}
            </Button>
          </LeafForm>

          <div className="w-full flex items-center gap-5 mt-5">
            <Button
              disabled={role === "admin"} // Disable if already selected
              onClick={() => handleRoleToggle("admin")}
              className={`w-full bg-transparent text-primary hover:bg-green-600 hover:text-white border border-primary font-medium flex items-center gap-2 ${
                role === "admin" ? "bg-green-600 text-white" : "bg-transparent"
              }`}
              variant="outline"
            >
              <UserPlus size={18} />
              Admin
            </Button>
            <Button
              disabled={role === "user"} // Disable if already selected
              onClick={() => handleRoleToggle("user")}
              className={`w-full bg-transparent text-primary hover:bg-green-600 hover:text-white border border-primary font-medium flex items-center gap-2 ${
                role === "user" ? "bg-green-600 text-white" : "bg-transparent"
              }`}
            >
              <User size={18} />
              User
            </Button>
          </div>

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
  );
};

export default LoginPage;
