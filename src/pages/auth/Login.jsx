import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import axios from "axios";
import { toast } from "sonner";
import { USER_API_END_POINT } from "@/utils/constant";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(input);
    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 px-4">
      <Card className="w-full max-w-sm mx-auto border border-slate-200 shadow-lg rounded-2xl">
        <CardHeader className="bg-white">
          <CardTitle className="text-emerald-700">
            Login to your account
          </CardTitle>
        </CardHeader>

        <CardContent className="bg-white">
          <form onSubmit={submitHandler} className="flex flex-col gap-6">
            {/* EMAIL */}
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-slate-700">
                Email
              </Label>
              <Input
                type="email"
                name="email"
                value={input.email}
                onChange={handleChange}
                placeholder="m@example.com"
                required
                className="border-slate-300 focus:ring-emerald-500"
              />
            </div>

            {/* PASSWORD */}
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
                name="password"
                value={input.password}
                onChange={handleChange}
                required
                className="border-slate-300 focus:ring-emerald-500"
              />
            </div>

            {/* RADIO GROUP */}
            <div className="flex flex-col gap-4">
              <Label className="text-slate-700">Login as:</Label>

              <RadioGroup
                onValueChange={(value) => setInput({ ...input, role: value })}
                className="flex items-center gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="applicant"
                    id="applicant"
                    checked={input.role === "applicant"}
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
                    checked={input.role === "recruiter"}
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

            {/* SUBMIT BUTTON */}
            <Button
              type="submit"
              className="w-full bg-emerald-600 text-white hover:bg-emerald-700"
            >
              Login
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-2 bg-white">
          <div className="flex">
            <Label className="text-slate-700 text-sm">
              Don't have an account?
            </Label>
            <Link to="/auth/register">
              <Button
                variant="link"
                className="text-emerald-600 hover:underline ml-1"
              >
                Register
              </Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
