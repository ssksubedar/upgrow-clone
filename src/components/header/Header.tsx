import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="px-6 py-5 shadow-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="rounded-full bg-violet-500 px-3 py-1 text-2xl">
                U
              </div>
              <div className="text-2xl font-bold">Upgrow</div>
            </Link>
            <div className="bg-gray-950 text-white px-2 p-1 text-sm font-bold rounded-md">
              GPT-4 Powered
            </div>
          </div>
          <div className="flex items-center gap-8 text-gray-500 font-semibold">
            <Link
              href="/"
              className="hover:bg-gray-100 px-3 py-1 rounded-lg hover:text-gray-900 flex items-center gap-1"
            >
              {" "}
              <span>Platform</span> <ChevronDown size={20} />{" "}
            </Link>
            <Link
              href="/"
              className="hover:bg-gray-100 px-3 py-1 rounded-lg hover:text-gray-900"
            >
              {" "}
              Pricing
            </Link>
            <Link
              href="/"
              className="hover:bg-gray-100 px-3 py-1 rounded-lg hover:text-gray-900"
            >
              {" "}
              Reviews
            </Link>
            <Link
              href="/"
              className="hover:bg-gray-100 px-3 py-1 rounded-lg hover:text-gray-900 flex items-center gap-1"
            >
              {" "}
              <span>Instagram Labs</span> <ChevronDown size={20} />{" "}
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="hover:bg-gray-100 px-3 py-1 rounded-lg hover:text-gray-900 font-semibold"
            >
              {" "}
              Log in
            </Link>
            <Link href="/">
              {" "}
              <button className="bg-gray-800 text-white font-bold px-4 py-2 rounded-md hover:bg-gray-900">
                Start for free
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
