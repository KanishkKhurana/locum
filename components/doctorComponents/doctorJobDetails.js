import React from 'react'
import Image from "next/image";
import logo from "/public/doctor-photo.jpg";

export default function DoctorJobDetails(props) {
  return (
    <div class="md:w-7/12 rounded-lg border border-slate-300 shadow-md h-fit m-2 mt-4 ml-0 pl-0 hidden md:inline">
        <div class="flex justify-evenly flex-col md:flex-row  items-center">
            <div class="m-2 mb-1">
            <Image src={logo} class="w-10 h-10  rounded-full" alt="User Icon" width="70vw" height="70vh"/>
            </div>
            <div class="mx-5 mt-1 text-center md:text-left mb-2">
                <h1 class="font-sans text-sm antialiased font-bold text-slate-500 capitalize mb-0">{props.hospitalName || "Promoted Jobs"} </h1>
                <h1 class="font-sans text-xl antialiased font-bold text-slate-900 capitalize mb-2">{props.hospitalName || "My Hospital"}</h1>
                <span class="bg-blue-100 text-blue-800 text-md font-medium mr-2 px-2.5 py-1 rounded dark:bg-blue-200 dark:text-blue-800">{props.specialityReqd || "ENT"}</span>

                <p class="font-sans text-xs font-semibold text-slate-700 mt-2"> 📧  {props.hospitalEmail || "lolmedicity@med.com"}</p>
            </div>
            <div>
            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-md px-5 py-2.5 text-center h-fit  m-3 mb-1">Apply</button>
            </div>
        </div>


        <div>
        <div class=" ">
            <p class="font-sans font-normal p-3 text-slate-700 text-left overflow-y-auto ">{props.details || "Diagnose and treat disorders and diseases of the cardiovascular system. Perform patient exams and order or conduct diagnostic testing. Develop ongoing treatment and disease-management plans. Prescribe medicine and coordinate referrals as  necessary."}</p>

        </div>
        </div>




    </div>
  )
}
