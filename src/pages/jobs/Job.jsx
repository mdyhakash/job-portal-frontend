import React from "react";
import JobCard from "./JobCard";
import { useJobs } from "@/hooks/useJob";
import FilterCard from "./filterjobs/FilterCard";
import { useJobStore } from "@/store/jobStore";

const Job = () => {
  const { data: jobs, isLoading, isError } = useJobs();
  const filters = useJobStore((state) => state.filters);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading jobs.</div>;

  const filteredJobs = jobs.filter((job) => {
    // Industry filter by category._id
    const industryMatch =
      !filters.industry || job.category?._id === filters.industry;

    // Location filter
    const locationMatch =
      !filters.location ||
      (job.location || "").toLowerCase() === filters.location.toLowerCase();

    // Job Type filter
    const jobTypeMatch =
      !filters.jobType ||
      (job.jobType || "").toLowerCase() === filters.jobType.toLowerCase();

    // Experience Level filter
    const experienceMatch =
      !filters.experienceLevel ||
      (job.experienceLevel >= filters.experienceLevel.min &&
        job.experienceLevel <= filters.experienceLevel.max);
    // Salary Range filter
    let salaryMatch = true;
    if (filters.salaryRange) {
      salaryMatch =
        job.salaryRange >= filters.salaryRange.min &&
        job.salaryRange <= filters.salaryRange.max;
    }

    return (
      industryMatch &&
      locationMatch &&
      jobTypeMatch &&
      experienceMatch &&
      salaryMatch
    );
  });

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div className="flex gap-5">
        <div className="w-[20%]">
          <FilterCard />
        </div>

        <div className="w-[80%]">
          {filteredJobs.length === 0 ? (
            <span>No Jobs Found</span>
          ) : (
            <div className="grid grid-cols-3 gap-4 pb-5">
              {filteredJobs.map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Job;
