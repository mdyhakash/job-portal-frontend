import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { daysAgo } from "@/utils/createdAt";
import { useNavigate } from "react-router";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Avatar } from "@radix-ui/react-avatar";
const LatestJobCard = ({ job }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/description/${job._id}`)}>
      <Card className="p-6 cursor-pointer hover:shadow-2xl transition-shadow">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xs font-semibold">
                {daysAgo(job?.createdAt)}
              </h1>
              <CardTitle className="text-lg font-semibold">
                {job.company.name}
              </CardTitle>
              <CardDescription>{job.location}</CardDescription>
            </div>
            <Avatar className="h-16 w-16">
              <AvatarImage
                src={job?.company?.logo || "/default-logo.png"}
                alt="Company Logo"
              />
              <AvatarFallback>Logo</AvatarFallback>
            </Avatar>
          </div>
        </CardHeader>

        <CardContent className="space-y-3">
          <div>
            <h2 className="text-base font-semibold">{job?.title}</h2>
            <p className="text-sm text-gray-600">{job?.description}</p>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <Badge>{job?.jobType}</Badge>
            <Badge>{job?.salaryRange}LPA</Badge>
            <Badge>{job?.experienceLevel}yrs</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LatestJobCard;
