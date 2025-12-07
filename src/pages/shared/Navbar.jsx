import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PopoverContent } from "@/components/ui/popover";
import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import { LogOut, User2 } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router";
import { useAuthStore } from "@/store/authStore";
const Navbar = () => {
  // const user = false;
  const user = useAuthStore((state) => state.user);
  return (
    <div className="bg-slate-100 border-b border-slate-200 shadow-sm">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        <div>
          <h1 className="text-2xl font-bold text-emerald-700">
            Job <span className="text-slate-700">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5 text-slate-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-emerald-600"
                    : "text-slate-700 hover:text-emerald-500"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/jobs"
                className={({ isActive }) =>
                  isActive
                    ? "text-emerald-600"
                    : "text-slate-700 hover:text-emerald-500"
                }
              >
                Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/browse"
                className={({ isActive }) =>
                  isActive
                    ? "text-emerald-600"
                    : "text-slate-700 hover:text-emerald-500"
                }
              >
                Browse
              </NavLink>
            </li>
          </ul>

          {!user ? (
            <div className="flex items-center gap-3">
              <Link to="/auth/login">
                <Button
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-emerald-50"
                >
                  Login
                </Button>
              </Link>
              <Link to="/auth/register">
                <Button className="bg-emerald-600 text-white hover:bg-emerald-700">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4 items-center">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-slate-900">
                        {user.name}
                      </h4>
                      <p className="text-sm text-slate-500">{user.email}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 text-slate-700">
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <User2 className="text-emerald-600" />
                      <Button
                        variant="link"
                        className="text-emerald-600 hover:underline"
                      >
                        View profile
                      </Button>
                    </div>
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <LogOut className="text-red-600" />
                      <Button
                        variant="link"
                        className="text-red-600 hover:underline"
                      >
                        Logout
                      </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
