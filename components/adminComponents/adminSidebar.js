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

      <div class="fixed h-full top-0 left-0 p-2 w-[21vw] z-40 overflow-y-auto text-center bg-gray-900  border-r border-cyan-300 ">
        <div class="text-gray-100 text-xl">
          <div class="p-2.5 mt-1 flex items-center">
            <Image
              src={logo}
              class="mr-2 pr-2 h-6  "
              alt="Locum Logo"
              width="65vw"
              height="65vh"
            />
            <h1 class="font-bold text-gray-200 text-2xl mx-2 select-none hidden md:inline">
              Locum
            </h1>

          </div>
          <div class="my-2 bg-gray-600 h-[1px]"></div>
        </div>

        <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onClick={() => setView("Dashboard")}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg>
          <span class="text-[15px] ml-4 text-gray-200 font-bold hidden md:inline" >
            Dashboard
          </span>
        </div>
        <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onClick={() => setView("Hospitals")}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
</svg>
          <span class="text-[15px] ml-4 text-gray-200 font-bold hidden md:inline">
            Hospitals
          </span>
        </div>
        <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onClick={() => setView("Doctors")}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>
          <span class="text-[15px] ml-4 text-gray-200 font-bold hidden md:inline">Doctors</span>
        </div>
        <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onClick={() => setView("Jobs")}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
</svg>
          <span class="text-[15px] ml-4 text-gray-200 font-bold hidden md:inline">Jobs</span>
        </div>
        <div class="my-4 bg-gray-600 h-[1px]"></div>

        <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg>
          <span class="text-[15px] ml-4 text-gray-200 font-bold hidden md:inline">Logout</span>
        </div>
      </div>
    </div>
  );

  return (
    <div class="flex flex-row h-full">
      <div class="shrink">
      <SidebarComponent />
      </div>
      
      <div class="grow ml-[21vw]">
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
