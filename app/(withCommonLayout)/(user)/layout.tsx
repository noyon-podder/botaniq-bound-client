import Container from "@/components/shared/Container";
import React, { ReactNode } from "react";

const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <div className="grid grid-cols-12">
        <div className="col-span-3 ">SIdebar</div>
        <div className="col-span-6">{children}</div>
        <div className="col-span-3 ">sidebar</div>
      </div>
    </Container>
  );
};

export default UserLayout;
