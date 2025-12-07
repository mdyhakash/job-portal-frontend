import { Outlet } from "react-router";
import Navbar from "@/pages/shared/Navbar";

import React from "react";
import Footer from "@/pages/shared/Footer";

const RootLayout = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
