import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSingleJob } from "@/hooks/useJob";
import { MapPin } from "lucide-react";

import { useParams } from "react-router";

const JobDetails = () => {
  const { id } = useParams();
  const { data: job, isLoading, isError } = useSingleJob(id);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error loading job details.</div>;
  }
  const isApplied = true;
  return (
    <div className="max-w-5xl mx-auto my-10 space-y-6">
      {/* Job Overview */}
      <Card className="p-6">
        <CardHeader className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
          <div>
            <CardTitle className="text-2xl font-bold">{job?.title}</CardTitle>
            <div className="flex flex-wrap items-center gap-2 mt-3">
              <Badge
                variant="secondary"
                className="font-medium text-emerald-700"
              >
                {job?.jobType}
              </Badge>
              <Badge
                variant="secondary"
                className="font-medium text-emerald-700    "
              >
                {job?.experienceLevel} yrs Exp
              </Badge>
              <Badge
                variant="secondary"
                className="font-medium text-emerald-700    "
              >
                {job?.salaryRange} LPA
              </Badge>
              <Badge
                variant="secondary"
                className="font-medium text-emerald-700    "
              >
                {job?.position} Positions
              </Badge>
            </div>
            <p className="mt-3 text-gray-600 flex items-center">
              <MapPin className="w-5 h-5 mr-1 text-emerald-700" />
              {job?.location}
            </p>
          </div>
          <Button
            disabled={isApplied}
            className={`rounded-lg ${
              isApplied
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-emerald-600 hover:bg-emerald-600/90"
            }`}
          >
            {isApplied ? "Already Applied" : "Apply Now"}
          </Button>
        </CardHeader>
      </Card>

      {/* Job Description */}
      <Card className="p-6">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Job Description
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700">
          <p>{job?.description}</p>
          <div>
            <h3 className="font-semibold mb-2">Requirements:</h3>
            <ul className="list-disc list-inside space-y-1">
              {job?.requirements?.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Company Info */}
      <Card className="p-6">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Company</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-gray-700">
          <p className="font-bold">{job?.company?.name}</p>
          {job?.company?.website && (
            <a
              href={`https://${job.company.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:underline"
            >
              {job.company.website}
            </a>
          )}
        </CardContent>
      </Card>

      {/* Meta Info */}
      <Card className="p-6 flex justify-between text-gray-600">
        <span>Posted on: {new Date(job?.createdAt).toLocaleDateString()}</span>
        <span>Total Applicants: {job?.applications?.length}</span>
      </Card>
    </div>
  );
};

export default JobDetails;
