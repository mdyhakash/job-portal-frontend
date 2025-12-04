import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 px-4">
      <Card className="w-full max-w-lg mx-auto border border-slate-200 shadow-lg rounded-2xl">
        <CardHeader className="bg-white">
          <CardTitle className="text-emerald-700">
            Register to your account
          </CardTitle>
          {/* <CardDescription className="text-slate-600">
            Enter your email below to register to your account
          </CardDescription> */}
        </CardHeader>
        <CardContent className="bg-white">
          <form className="flex flex-col gap-5">
            <div className="grid gap-2">
              <Label htmlFor="fullName" className="text-slate-700">
                Full Name
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="John Doe"
                required
                className="border-slate-300 focus:ring-emerald-500"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-slate-700">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="border-slate-300 focus:ring-emerald-500"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phoneNumber" className="text-slate-700">
                Phone Number
              </Label>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="+1 234 567 8901"
                required
                className="border-slate-300 focus:ring-emerald-500"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-slate-700">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                required
                className="border-slate-300 focus:ring-emerald-500"
              />
            </div>
            <div className="flex flex-col gap-4">
              <Label className="text-slate-700">Register as:</Label>
              <RadioGroup className="flex items-center gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="applicant"
                    id="applicant"
                    className="accent-emerald-600 focus:ring-emerald-500"
                  />
                  <Label
                    htmlFor="applicant"
                    className="ml-2 text-slate-700 cursor-pointer hover:text-emerald-600"
                  >
                    Applicant
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="recruiter"
                    id="recruiter"
                    className="accent-emerald-600 focus:ring-emerald-500"
                  />
                  <Label
                    htmlFor="recruiter"
                    className="ml-2 text-slate-700 cursor-pointer hover:text-emerald-600"
                  >
                    Recruiter
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex items-center gap-2">
              <Label className="w-1/3">Profile Photo</Label>
              <Input
                type="file"
                className="border-slate-300 focus:ring-emerald-500 cursor-pointer"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 bg-white">
          <Button
            type="submit"
            className="w-full bg-emerald-600 text-white hover:bg-emerald-700"
          >
            Register
          </Button>
          <Label className="text-slate-700 text-center mt-3">
            Already have an account?
          </Label>
          <Link to="/auth/login" className="w-full">
            <Button
              variant="outline"
              className="w-full border-slate-200 text-slate-700 hover:bg-emerald-50"
            >
              Login
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
