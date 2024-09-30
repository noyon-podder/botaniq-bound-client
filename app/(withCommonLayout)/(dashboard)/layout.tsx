import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <div className="bg-pink-800 w-[400px]">SIdebar</div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
