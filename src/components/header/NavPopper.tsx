"use client";
import React from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import Link from "next/link";

type dataProps = {
  name: string;
  desc: string;
  href: string;
  updateText: string;
  updateStyles: string;
  icon: string | JSX.Element;
};

type NavpopperProps = {
  title: string;
  data: dataProps[];
};
const NavPopper = ({ title, data }: NavpopperProps) => {
  return (
    <div className="top-16 w-full max-w-sm px-4">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
              inline-flex items-center px-3 py-2 text-sm font-semibold leading-6 text-gray-900 transition-colors bg-transparent group gap-x-1 hover:bg-gray-100 rounded-xl duration-10 whitespace-nowrap focus:outline-none`}
            >
              <span className="inline-flex items-center text-base font-medium text-gray-600 rounded-md group-hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                {title}
              </span>
              <ChevronDownIcon
                className={`${open ? "text-gray-600" : "text-gray-600"}
                ml-2 h-5 w-5 transition duration-150 ease-in-out `}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 flex w-screen px-4 mt-5 -translate-x-1/2 left-1/2 max-w-max opacity-100 translate-y-0">
                <div className="flex-auto w-screen max-w-md overflow-hidden text-sm leading-6 bg-white shadow-lg rounded-3xl ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {data.map((item) => {
                       return(
                        <div key={item.name} className="relative flex p-4 rounded-lg group gap-x-6 hover:bg-gray-50">
                        <div className="mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white transition-transform duration-300 group-hover:scale-90 bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 7a5 5 0 1 0 5 5"></path><path d="M13 3.055a9 9 0 1 0 7.941 7.945"></path><path d="M15 6v3h3l3 -3h-3v-3z"></path><path d="M15 9l-3 3"></path></svg>
                        </div>
                        <div>
                          <Link href={item.href}>
                            <span>{item.name} <span className="rounded-full py-1 px-2.5 text-xs font-semibold bg-fuchsia-600/10 text-fuchsia-600">{item.updateText}</span></span>
                          <p className="mt-0 text-gray-600">{item.desc}</p>
                          </Link>
                        </div>
                        </div>
                       ) 
                      
                    })}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50"><Link href="/demo" className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="flex-none w-5 h-5 text-gray-400"><path fill-rule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z" clip-rule="evenodd"></path></svg>See Live Demo</Link><a href="javascript:Intercom('showNewMessage')" className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="flex-none w-5 h-5 text-gray-400" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22H2L4.92893 19.0711C3.11929 17.2614 2 14.7614 2 12ZM6.82843 20H12C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 14.1524 4.85124 16.1649 6.34315 17.6569L7.75736 19.0711L6.82843 20ZM8 13H16C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13Z"></path></svg>Live Chat Support</a></div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default NavPopper;
