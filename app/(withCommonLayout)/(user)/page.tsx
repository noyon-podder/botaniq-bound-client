import { ModeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import React from "react";

const HomePage = () => {
  return (
    <div className="bg-white">
      <Button className="bg-custom-main dark:bg-green-600 text-white">
        Hello Developer
      </Button>
      <ModeToggle />
    </div>
  );
};

export default HomePage;
