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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { toast } from "sonner";
import { USER_API_END_POINT } from "@/utils/constant";
const Register = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(input);
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    if (!input.role) {
      toast.error("Please select a role");
      return;
    }
    formData.append("role", input.role);

    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/auth/login");
      }
    } catch (err) {
      console.log(err);
      toast.error("Registration failed");
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="min-h-screen w-full flex items-center justify-center bg-slate-50 px-4"
    >
      <Card className="w-full max-w-lg mx-auto border border-slate-200 shadow-lg rounded-2xl">
        <CardHeader className="bg-white">
          <CardTitle className="text-emerald-700">
            Register to your account
          </CardTitle>
        </CardHeader>

        <CardContent className="bg-white flex flex-col gap-5">
          {/* FULL NAME */}
          <div className="grid gap-2">
            <Label className="text-slate-700">Full Name</Label>
            <Input
              type="text"
              value={input.name}
              name="name"
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="border-slate-300 focus:ring-emerald-500"
            />
          </div>

          {/* EMAIL */}
          <div className="grid gap-2">
            <Label className="text-slate-700">Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={handleChange}
              placeholder="m@example.com"
              required
              className="border-slate-300 focus:ring-emerald-500"
            />
          </div>

          {/* PHONE */}
          <div className="grid gap-2">
            <Label className="text-slate-700">Phone Number</Label>
            <Input
              type="tel"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={handleChange}
              placeholder="+1 234 567 8901"
              required
              className="border-slate-300 focus:ring-emerald-500"
            />
          </div>

          {/* PASSWORD */}
          <div className="grid gap-2">
            <Label className="text-slate-700">Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={handleChange}
              required
              className="border-slate-300 focus:ring-emerald-500"
            />
          </div>

          {/* ROLE RADIO */}
          <div>
            <Label className="text-slate-700">Register as:</Label>
            <RadioGroup className="flex items-center gap-4 my-2">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="applicant"
                  checked={input.role === "applicant"}
                  onChange={handleChange}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Applicant</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={handleChange}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            {/* FILE UPLOAD */}
            <div className="flex flex-col gap-1 mt-3">
              <Label className="text-slate-700">Profile Photo</Label>
              <Input
                type="file"
                accept="image/*"
                name="file"
                onChange={changeFileHandler}
                className="border-slate-300 cursor-pointer"
              />
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-2 bg-white">
          <Button
            type="submit"
            className="w-full bg-emerald-600 text-white hover:bg-emerald-700"
          >
            Register
          </Button>

          <div className="flex justify-center text-sm">
            <Label className="text-slate-700">Already have an account?</Label>
            <Link to="/auth/login">
              <Button variant="link" className="text-emerald-600 ml-1">
                Login
              </Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </form>
  );
};

export default Register;
