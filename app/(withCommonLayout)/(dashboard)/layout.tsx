import Sidebar from "@/components/module/Dashboard/Sidebar";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="lg:ml-[300px] w-full">{children}</div>
    </div>
  );
};

export default DashboardLayout;
