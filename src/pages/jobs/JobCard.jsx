import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router";
import { daysAgo } from "@/utils/createdAt";
const JobCard = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div className="">
      <Card className="p-5 border border-gray-100 shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between p-0 ">
          <CardDescription>{daysAgo(job?.createdAt)}</CardDescription>
          <Button variant="outline" size="icon" className="rounded-full">
            <Bookmark className="text-emerald-700" />
          </Button>
        </CardHeader>

        <CardContent className="mt-3 p-0">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage
                src={job?.company?.logo || "/default-logo.png"}
                alt="Company Logo"
              />
              <AvatarFallback>Logo</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg">{job?.company?.name}</CardTitle>
              <p className="text-sm text-gray-500">{job?.location}</p>
            </div>
          </div>

          <div className="mt-4">
            <h1 className="font-bold text-lg">{job?.title}</h1>
            <p className="text-sm text-gray-600">{job?.description}</p>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <Badge variant="outline" className="text-emerald-700">
              {job?.position} Positions
            </Badge>
            <Badge variant="outline" className="text-emerald-700">
              {job?.jobType}
            </Badge>
            <Badge variant="outline" className="text-emerald-700">
              {job?.salaryRange} LPA
            </Badge>
          </div>
        </CardContent>
        <CardFooter className="flex gap-3 mt-4 p-0">
          <Button
            variant="outline"
            onClick={() => navigate(`/description/${job?._id}`)}
          >
            Details
          </Button>
          <Button className="bg-emerald-600">Save for later</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default JobCard;
