import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import Category from "../category/Category";
import LatestJob from "../Latest Job/LatestJob";

const Home = () => {
  return (
    <div className="mt-4">
      <HeroSection />
      <Category />
      <LatestJob />
    </div>
  );
};

export default Home;
