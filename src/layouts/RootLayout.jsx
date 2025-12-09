import { Outlet } from "react-router";
import Navbar from "@/pages/shared/Navbar";

import React from "react";
import Footer from "@/pages/shared/Footer";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
