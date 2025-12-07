import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const LatestJobCard = () => {
  return (
    <Card className="p-6 cursor-pointer hover:shadow-2xl transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Company Name</CardTitle>
        <CardDescription>Bangladesh</CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        <div>
          <h2 className="text-base font-semibold">Job Title</h2>
          <p className="text-sm text-gray-600">Job Description</p>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-2">
          <Badge>Full Time</Badge>
          <Badge>Job Type</Badge>
          <Badge>Salary</Badge>
          <Badge>Experience</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default LatestJobCard;
