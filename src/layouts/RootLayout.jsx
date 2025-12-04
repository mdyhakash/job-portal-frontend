import { Outlet } from "react-router";
import Navbar from "@/pages/shared/Navbar";

import React from "react";

const RootLayout = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
