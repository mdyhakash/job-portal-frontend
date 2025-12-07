import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span
          className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-emerald-700 
      font-medium "
        >
          Welcome to Job Portal
        </span>
        <h1 className="text-5xl font-bold">
          Search for your <span className="text-emerald-700">Dream</span> job
        </h1>
        <p>Find the best opportunities tailored just for you.</p>
        <div className="flex w-[40%] mx-auto items-center border border-gray-200 rounded-md shadow-lg">
          <div className="flex items-center px-2 py-1 w-full gap-3">
            <Input
              type="text"
              placeholder="Search for jobs"
              className="outline-none border-none w-full"
            />
            <Button className="bg-emerald-700 ">
              <Search size={24} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
