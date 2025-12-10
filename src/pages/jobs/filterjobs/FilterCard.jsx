import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useJobStore } from "@/store/jobStore";
import { useCategories, useJobs } from "@/hooks/useJob";

const FilterCard = () => {
  const filters = useJobStore((state) => state.filters);
  const setFilter = useJobStore((state) => state.setFilter);

  const {
    data: categories,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
  } = useCategories();

  const {
    data: jobs,
    isLoading: isJobLoading,
    isError: isJobsError,
  } = useJobs();

  // Get unique values from jobs for other filters
  const getUnique = (key) => {
    const uniqueItems = jobs?.map((job) => job[key] || []);
    return [...new Set(uniqueItems)].filter(Boolean);
  };

  // Hardcoded experience levels
  const experienceLevels = [
    { label: "Junior (0-1 yrs)", value: "1" },
    { label: "Mid (2-3 yrs)", value: "2" },
    { label: "Senior (4-5 yrs)", value: "5" },
  ];

  // Hardcoded salary ranges
  const salaryRanges = [
    { label: "0-10k", min: 0, max: 10 },
    { label: "10k-20k", min: 10, max: 20 },
    { label: "20k-30k", min: 20, max: 30 },
    { label: "30k-50k", min: 30, max: 50 },
  ];

  const filterData = [
    {
      filterType: "Industry",
      array: isCategoriesLoading || isCategoriesError ? [] : categories,
      labelField: "name",
      field: "industry",
      isObject: true,
    },
    {
      filterType: "Location",
      array: isJobLoading || isJobsError ? [] : getUnique("location"),
      labelField: null,
      field: "location",
    },
    {
      filterType: "Job Type",
      array: isJobLoading || isJobsError ? [] : getUnique("jobType"),
      labelField: null,
      field: "jobType",
    },
    {
      filterType: "Experience Level",
      array: experienceLevels,
      labelField: "label",
      field: "experienceLevel",
      isObject: false,
    },
    {
      filterType: "Salary Range",
      array: salaryRanges,
      labelField: "label",
      field: "salaryRange",
      isObject: false,
    },
  ];

  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />

      {filterData.map((data, index) => (
        <div key={index} className="mt-4">
          <h2 className="font-bold text-base mb-2">{data.filterType}</h2>

          {data.array.length === 0 ? (
            <p className="text-sm text-gray-500">
              {isCategoriesLoading || isJobLoading
                ? "Loading..."
                : "No options available"}
            </p>
          ) : (
            <RadioGroup
              value={
                data.field === "salaryRange" && filters.salaryRange
                  ? filters.salaryRange.label
                  : data.field === "experienceLevel" && filters.experienceLevel
                  ? filters.experienceLevel.label
                  : filters[data.field] || ""
              }
              onValueChange={(value) => {
                if (data.field === "salaryRange") {
                  const selectedRange = data.array.find(
                    (item) => item.label === value
                  );
                  setFilter(data.field, selectedRange || null);
                } else if (data.field === "experienceLevel") {
                  const selectedLevel = data.array.find(
                    (item) => item.label === value
                  );
                  let range = null;
                  if (selectedLevel) {
                    if (selectedLevel.value === "1")
                      range = { min: 0, max: 1, label: selectedLevel.label };
                    else if (selectedLevel.value === "2")
                      range = { min: 2, max: 3, label: selectedLevel.label };
                    else if (selectedLevel.value === "5")
                      range = { min: 4, max: 5, label: selectedLevel.label };
                  }
                  setFilter(data.field, range);
                } else {
                  setFilter(data.field, value);
                }
              }}
              className="mt-2"
            >
              {/* All option */}
              <div className="flex items-center space-x-2 my-2">
                <RadioGroupItem value="" id={`clear-${index}`} />
                <Label htmlFor={`clear-${index}`}>All</Label>
              </div>

              {data.array.map((item, idx) => {
                const itemId = `filter-${index}-${idx}`;
                const label = data.labelField ? item[data.labelField] : item;
                const value = data.isObject ? item._id : label;

                return (
                  <div
                    key={itemId}
                    className="flex items-center space-x-2 my-2"
                  >
                    <RadioGroupItem value={value} id={itemId} />
                    <Label htmlFor={itemId}>{label}</Label>
                  </div>
                );
              })}
            </RadioGroup>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterCard;
