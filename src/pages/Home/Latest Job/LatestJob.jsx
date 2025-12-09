import LatestJobCard from "@/components/ui/components/LatestJobCard";
import React from "react";

const LatestJob = () => {
  const allJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold te text-emerald-700">Latest Jobs </h1>
      <div className="grid grid-cols-3 gap-4 my-10">
        {allJobs.length <= 0 ? (
          <span>No job Available</span>
        ) : (
          allJobs
            ?.slice(0, 6)
            .map((job, index) => <LatestJobCard key={index} job={job} />)
        )}
      </div>
    </div>
  );
};

export default LatestJob;
