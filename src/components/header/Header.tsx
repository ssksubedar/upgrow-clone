import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavPopper from "./NavPopper";
import { platformlinks, labLinks } from "../../data/nav";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <nav className="bg-white bg-opacity backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-50 flex justify-between py-5">
        <div className="relative z-10 flex items-center gap-16">
          <Link href="/">
            <div className="group flex items-center gap-2 w-auto h-10">
              <Image
                src="/images/upgrow-logo-icon.svg"
                width={32}
                height={32}
                alt="upgrow-Logo"
                className="hover-rotate-180"
                style={{ color: "transparent" }}
              />
              <Image
                src="/images/upgrow-logo-text-minified.svg"
                width={32}
                height={32}
                alt="upgrow-Logo"
                className="inline-block h-5 w-auto mt-2"
                style={{ color: "transparent" }}
              />
              <span className="inline-block legend">GPT-4 Powered</span>
            </div>
          </Link>
        </div>
        <div className="relative z-10 flex items-center gap-16">
          <div className="hidden lg:flex lg:gap-10">
            <div className="relative">
              <NavPopper title="Platform" data={platformlinks} />
            </div>
            <Link
              href="/pricing"
              className="hidden rounded-lg border-gray-300 px-3.5 py-1.5 text-base font-medium leading-7 text-gray-700 hover:bg-gray-50 duration-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-gray-100 active:text-gray-700/80 lg:block"
            >
              Pricing
            </Link>
            <Link
              href="/pricing"
              className="hidden rounded-lg border-gray-300 px-3.5 py-1.5 text-base font-medium leading-7 text-gray-700 hover:bg-gray-50 duration-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-gray-100 active:text-gray-700/80 lg:block"
            >
              Reviews
            </Link>
            <div className="relative">
              <NavPopper title="Insta Labs" data={labLinks} />
            </div>
          </div>
        </div>
        <div className="relative z-10 flex items-center gap-6">
          
          <Link
            href="/pricing"
            className="hidden rounded-lg border-gray-300 px-3.5 py-1.5 text-base font-medium leading-7 text-gray-700 hover:bg-gray-50 duration-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-gray-100 active:text-gray-700/80 lg:block"
          >
            Log In
          </Link>
          <Link
            className="hidden rounded-lg bg-gray-800 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-gray-800 active:text-white/80 lg:block"
            href="/setup"
          >
            Start for free
          </Link>
        </div>
        <div className="lg:hidden ">
            <MobileMenu />
          </div>
      </div>
    </nav>
  );
};

export default Header;
