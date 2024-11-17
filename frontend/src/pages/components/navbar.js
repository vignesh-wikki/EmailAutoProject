import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav className="bg-[#9de3f6]">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 h-20">
        <div class="relative pt-6 pb-16 sm:pb-24">
          <nav class="relative flex items-center justify-between sm:h-10 md:justify-center">
            <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div class="flex items-center justify-between w-full md:w-auto">
                <img
                  class="w-auto h-8 sm:h-10"
                  src="/assets/email-automation.png"
                  loading="lazy"
                  width="202"
                  height="40"
                  alt="logo"
                />

                <div class="flex items-center -mr-2 md:hidden">
                  <button
                    class="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-50 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50"
                    type="button"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="hidden md:flex md:space-x-10 list-none">
              <li>
                <Link
                  to="/"
                  class="text-base  text-white font-bold list-none hover:text-gray-900"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/campaign"
                  class="text-base font-bold text-white list-none hover:text-gray-900"
                >
                  Campaigns
                </Link>
              </li>
              <li>
                <Link
                  to="/email/template"
                  class="text-base font-bold text-white list-none hover:text-gray-900"
                >
                  Email Templetes
                </Link>
              </li>
              <li>
                <Link
                  to="/report"
                  class="text-base font-bold text-white list-none hover:text-gray-900"
                >
                  Report
                </Link>
              </li>
            </div>
            <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
              <div class="inline-flex rounded-full shadow">
                <div
                  href="#"
                  class="inline-flex items-center px-4 py-2 text-base text-gray-900 bg-white border border-transparent rounded-full cursor-pointer font-base hover:bg-gray-50 "
                >
                  Sign in
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
