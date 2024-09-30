"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [toggle, setToggle] = React.useState(false);

  console.log(theme);

  return (
    <>
      {toggle ? (
        <Button variant={"outline"} onClick={() => setToggle(!toggle)}>
          <Sun
            onClick={() => setTheme("light")}
            className="h-[1.2rem] w-[1.2rem] "
          />
        </Button>
      ) : (
        <Button variant={"outline"} onClick={() => setToggle(!toggle)}>
          <Moon
            onClick={() => setTheme("dark")}
            className="h-[1.2rem] w-[1.2rem] "
          />
        </Button>
      )}
    </>
  );
}
