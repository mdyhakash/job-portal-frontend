import React from "react";
import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-white mt-20 font-semibold">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold text-emerald-600 mb-3">
            Job Portal
          </h2>
          <p className="text-sm text-gray-600">
            Find your dream job. Explore thousands of opportunities quickly and
            easily.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-emerald-600 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="hover:text-emerald-600 cursor-pointer">Home</li>
            <li className="hover:text-emerald-600 cursor-pointer">
              Browse Jobs
            </li>
            <li className="hover:text-emerald-600 cursor-pointer">
              Post a Job
            </li>
            <li className="hover:text-emerald-600 cursor-pointer">
              Login / Register
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-emerald-600 mb-3">
            Resources
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="hover:text-emerald-600 cursor-pointer">About Us</li>
            <li className="hover:text-emerald-600 cursor-pointer">Contact</li>
            <li className="hover:text-emerald-600 cursor-pointer">FAQ</li>
            <li className="hover:text-emerald-600 cursor-pointer">Support</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-emerald-600 mb-3">
            Follow Us
          </h3>
          <div className="flex items-center gap-4">
            <FacebookIcon className="h-5 w-5 cursor-pointer text-gray-700 hover:text-emerald-600" />
            <TwitterIcon className="h-5 w-5 cursor-pointer text-gray-700 hover:text-emerald-600" />
            <LinkedinIcon className="h-5 w-5 cursor-pointer text-gray-700 hover:text-emerald-600" />
            <InstagramIcon className="h-5 w-5 cursor-pointer text-gray-700 hover:text-emerald-600" />
          </div>
        </div>
      </div>

      <div className="border-t py-4">
        <p className="text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Job Portal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
