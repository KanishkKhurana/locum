import React, { useState, useEffect } from "react";
import Image from "next/image";
import AdminHeader from "./adminHeader";
import logo from "/public/locumlogo.png";
import AdminAnnouncement from "./adminAnnouncement";
import AdminDashboardCard from "./adminDashboardCard";
import AdminHospitals from "./adminHospitals";

export default function AdminSidebar({setView}) {
 



  useEffect(() => {
    // function dropdown() {
    //     document.querySelector("#submenu").classList.toggle("hidden");
    //     document.querySelector("#arrow").classList.toggle("rotate-0");
    //   }
    // //   dropdown();
    //   function openSidebar() {
    //     document.querySelector(".sidebar").classList.toggle("hidden");
    //   }
  });

  const SidebarComponent = () => (
    <div>
      <span
        class="absolute text-white text-4xl top-5 left-4 cursor-pointer"
        //    onclick={openSidebar()}
      >
        <i class="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
      </span>
      <div class="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[21vw] overflow-y-auto text-center bg-gray-900  border-r border-cyan-300 ">
        <div class="text-gray-100 text-xl">
          <div class="p-2.5 mt-1 flex items-center">
            <Image
              src={logo}
              class="mr-2 pr-2 h-6 sm:h-9 "
              alt="Locum Logo"
              width="65vw"
              height="65vh"
            />
            <h1 class="font-bold text-gray-200 text-2xl mx-5 select-none">
              Locum
            </h1>
            <i
              class="bi bi-x cursor-pointer ml-28 lg:hidden"
              //  onclick={openSidebar()}
            ></i>
          </div>
          <div class="my-2 bg-gray-600 h-[1px]"></div>
        </div>
        {/* <div class="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
          <i class="bi bi-search text-sm"></i>
          <input
            type="text"
            placeholder="Search"
            class="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div> */}
        <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <i class="bi bi-house-door-fill"></i>
          <span class="text-[15px] ml-4 text-gray-200 font-bold">
            Dashboard
          </span>
        </div>
        <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onClick={() => setView("Hospitals")}>
          <i class="bi bi-house-door-fill"></i>
          <span class="text-[15px] ml-4 text-gray-200 font-bold">
            Hospitals
          </span>
        </div>
        <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onClick={() => setView("Doctors")}>
          <i class="bi bi-bookmark-fill"></i>
          <span class="text-[15px] ml-4 text-gray-200 font-bold">Doctors</span>
        </div>
        <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onClick={() => setView("Jobs")}>
          <i class="bi bi-bookmark-fill"></i>
          <span class="text-[15px] ml-4 text-gray-200 font-bold">Jobs</span>
        </div>
        <div class="my-4 bg-gray-600 h-[1px]"></div>
        <div
          class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          //  onclick={dropdown()}
        >
          {/* <i class="bi bi-chat-left-text-fill"></i> */}
          {/* <div class="flex justify-between w-full items-center">
            <span class="text-[15px] ml-4 text-gray-200 font-bold">
              Chatbox
            </span>
            <span class="text-sm rotate-180" id="arrow">
              <i class="bi bi-chevron-down"></i>
            </span>
          </div> */}
        </div>
        {/* {/* <div
          class="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
          id="submenu"
        >
          <h1 class="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
            Social
          </h1>
          <h1 class="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
            Personal
          </h1>
          <h1 class="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
            Friends
          </h1> 
        </div> */}
        <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <i class="bi bi-box-arrow-in-right"></i>
          <span class="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <SidebarComponent />
      {/* <div class="relative ml-[21vw]">
      <AdminHeader />
        <AdminAnnouncement />
        <div class="flex flex-row justify-around">
        <AdminDashboardCard name="Hospital" value='31' />
        <AdminDashboardCard name="Doctors" value='51' />
        </div>
        <div class="overflow-x">
        <AdminHospitals />
        </div>
      </div> */}
    </div>
  );
}
