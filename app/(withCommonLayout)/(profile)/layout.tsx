import Navbar from "@/components/shared/Navbar";
import { ReactNode } from "react";

const ProfileLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="lg:mt-[90px] mt-[80px]">{children}</div>
    </div>
  );
};

export default ProfileLayout;
