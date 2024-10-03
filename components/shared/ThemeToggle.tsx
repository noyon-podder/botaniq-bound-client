"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [toggle, setToggle] = React.useState(false);

  return (
    <>
      {toggle ? (
        <Button
          variant={"outline"}
          onClick={() => {
            setTheme("light");
            setToggle(!toggle);
          }}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] " />
        </Button>
      ) : (
        <Button
          variant={"outline"}
          onClick={() => {
            setTheme("dark");
            setToggle(!toggle);
          }}
        >
          <Moon className="h-[1.2rem] w-[1.2rem] " />
        </Button>
      )}
    </>
  );
}
