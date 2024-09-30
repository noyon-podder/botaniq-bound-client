import Container from "@/components/shared/Container";
import Navbar from "@/components/shared/Navbar";
import React, { ReactNode } from "react";

const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <Container>
        <div className="grid grid-cols-12">
          <div className="col-span-3 bg-white">SIdebar</div>
          <div className="col-span-6">{children}</div>
          <div className="col-span-3 ">sidebar</div>
        </div>
      </Container>
    </>
  );
};

export default UserLayout;
