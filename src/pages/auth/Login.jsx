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
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 px-4">
      <Card className="w-full max-w-sm mx-auto border border-slate-200 shadow-lg rounded-2xl">
        <CardHeader className="bg-white">
          <CardTitle className="text-emerald-700">
            Login to your account
          </CardTitle>
          <CardDescription className="text-slate-600">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="bg-white">
          <form className="flex flex-col gap-6">
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
              <div className="flex items-center">
                <Label htmlFor="password" className="text-slate-700">
                  Password
                </Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm text-emerald-600 underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                required
                className="border-slate-300 focus:ring-emerald-500"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 bg-white">
          <Button
            type="submit"
            className="w-full bg-emerald-600 text-white hover:bg-emerald-700"
          >
            Login
          </Button>
          <Label className="text-slate-700 text-center">
            Don't have an account?
          </Label>
          <Link to="/auth/register" className="w-full">
            <Button
              variant="outline"
              className="w-full border-slate-200 text-slate-700 hover:bg-emerald-50"
            >
              Register
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
