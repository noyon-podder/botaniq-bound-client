"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import UserProvider from "@/context/UserProvider";
import StoreProvider from "../../context/StoreProvider";
import UserInfoProvider from "@/context/UserInfoProvider";

const queryClient = new QueryClient();

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <UserProvider>
          <UserInfoProvider>
            <Toaster />
            <NextThemesProvider {...props}>{children}</NextThemesProvider>
          </UserInfoProvider>
        </UserProvider>
      </StoreProvider>
    </QueryClientProvider>
  );
}
