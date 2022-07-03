import React from "react";
import Image from "next/image";
import logo from "/public/locumlogo.png";
import Link from "next/link";
import AdminAnnouncement from "./adminAnnouncement";


export default function AdminHeader() {
  const userName = "Admin";
  return (
    <div class="bg-gradient-to-b from-sky-200 border-gray-200 px-2 sm:px-3 py-1.75 rounded-md dark:bg-gray-800 p-3">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a
          href="#"
          class="flex items-center my-1 "
          onClick={(e) => router.push("/")}
        >
          <span class="self-center ml-1 sm:text-2xl md:text-3xl font-sans font-bold whitespace-nowrap dark:text-white sm:mr-0 ">
            Welcome, {userName} !
          </span>
        </a>
        <svg data-tooltip-target="tooltip-default" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
        <div
          id="tooltip-default"
          role="tooltip"
          class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-600"
        >
          Announcements are only visible to desktop users
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    
    </div>
    
  );
}
