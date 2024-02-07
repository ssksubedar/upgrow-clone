"use client";
import React from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { Link } from "lucide-react";

const navLinks = [
  {
    name: "pricing",
    href: "/",
  },
  {
    name: "Instagram Tools",
    href: "/",
  },
  {
    name: "Reviews",
    href: "/",
  },
  {
    name: "Blog",
    href: "/",
  },
];
const MobileMenu = () => {
  return (
    <>
      <Popover className="relative">
        <Popover.Button className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </Popover.Button>
        
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-[-100%] translate-x-[-100%]" // Start from fully above (negative translate)
          enterTo="opacity-100 translate-y-0" // End at full opacity with no translation
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0" // Start at full opacity with no translation
          leaveTo="opacity-0 translate-y-1" // End fully below (positive translate)
        >
          <Popover.Panel className="absolute left-0 z-0  px-6 pt-32 pb-6 origin-top shadow-2xl rounded-b-2xl bg-gray-50 shadow-gray-900/20">
            <div className="space-y-4">
              {navLinks.map((item: any) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-2xl leading-10 tracking-tight text-gray-700"
                >
                  Sravan
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-4 mt-8">
              <Link
                className="px-5 py-4 text-lg font-semibold leading-7 text-gray-800 border-gray-300 shadow-sm rounded-xl border-1 hover:border-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-gray-100 active:text-gray-700/80"
                href="/login"
              >
                Log in
              </Link>
              <Link
                className="px-5 py-4 text-lg font-semibold leading-7 text-white bg-gray-800 shadow-sm rounded-xl hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-gray-800 active:text-white/80"
                href="/sign-up"
              >
                Start for free
              </Link>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};

export default MobileMenu;
