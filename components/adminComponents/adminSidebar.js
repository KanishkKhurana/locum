import React, { useState, useEffect } from "react";
import Image from "next/image";
import AdminHeader from "./adminHeader";
import logo from "/public/locumlogo.png";
import AdminAnnouncement from "./adminAnnouncement";
import AdminDashboardCard from "./adminDashboardCard";
import AdminHospitals from "./adminHospitals";
import AdminDashboard from "./adminDashboard";
import AdminDoctors from "./adminDoctors";
import AdminJobs from "./adminJobs";
import AdminSidebarComp from "./adminSidebarComp";

export default function AdminSidebar() {
  const [view, setView] = useState("Dashboard")
  const [sidebar, setSidebar] = useState(false);



useEffect(()=>{},)
  if (typeof window !== "undefined") {
    // browser code
    function dropdown() {
      setSidebar("hidden rotate-0")
    }

  }
  function openSidebar() {
    setSidebar("hidden");
  }



  const SidebarComponent = () => (
    <div>
      <span
        class="fixed md:hidden text-white text-4xl z-20 top-5 left-4 cursor-pointer  ${sidebar}"
        onclick={() => openSidebar()}
      >
        <i class="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
      </span>
      <div class="h-full top-0 left-0 p-2 w-[21vw] z-40 overflow-y-auto text-center bg-gray-900  border-r border-cyan-300  md:absolute">
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
              onclick={() => openSidebar()}
            ></i>
          </div>
          <div class="my-2 bg-gray-600 h-[1px]"></div>
        </div>

        <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onClick={() => setView("Dashboard")}>
          <i class="bi bi-house-door-fill"></i>
          <span class="text-[15px] ml-4 text-gray-200 font-bold" >
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
      {/* <AdminSidebarComp /> */}
      <div class="relative md:ml-[21vw]">
        {view == "Dashboard" && <AdminDashboard />}
        <div class="overflow-x">

          {view == "Hospitals" && <AdminHospitals />}
          {view == "Doctors" && <AdminDoctors />}
          {view == "Jobs" && <AdminJobs />}
        </div>
      </div>
    </div>
  );
}
