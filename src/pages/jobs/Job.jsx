import React from "react";
import JobCard from "./JobCard";
import { useJobs } from "@/hooks/useJob";

const Job = () => {
  const { data: jobs, isLoading, isError } = useJobs();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error loading jobs.</div>;
  }
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div className="flex gap-5">
        <div className="w-[20%]">Filter Card</div>
        {jobs.length <= 0 ? (
          <span>No Jobs Found</span>
        ) : (
          <div className=" pb-5">
            <div className="grid grid-cols-3 gap-4">
              {jobs.map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Job;
