import React from 'react'
import Image from "next/image";
import logo from "/public/doctor-photo.jpg";



export default function DoctorJob(props) {
  return (
    <div class="md:w-full rounded-lg border bg-[#F6F9F9] border-slate-300 shadow-md h-fit m-2 mt-4 ml-0 pl-0">
        <div class="flex justify-evenly flex-col md:flex-row  items-center">
            <div class="m-2 mb-1">
            <Image src={logo} class="w-10 h-10  rounded-full" alt="User Icon" width="70vw" height="70vh"/>
            </div>
            <div class="mx-5 mt-1 text-center md:text-left mb-2">
                <h1 class="font-sans text-xl antialiased font-bold text-slate-900 capitalize mb-2">{props.hospitalName || "medicity hospital"}</h1>
                <span class="bg-blue-100 text-blue-800 text-md font-medium mr-2 px-2.5 py-1 rounded dark:bg-blue-200 dark:text-blue-800">{props.specialityReqd || "Cardiology"}</span>

                <p class="font-sans text-xs font-semibold text-slate-700 mt-2"> 📧  {props.hospitalEmail || "medicity@med.com"}</p>
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


        <div class="flex flex-col flex-wrap md:flex-row items-center border-t-2 py-2 justify-center w-full break-normal">
            <div class="basis-1/4 xs:border-b-2 md:border-r-2 mr-2 flex justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 mt-1 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div class="ml-2">
                    <p class="font-sans text-xs font-medium text-slate-500 ">{props.hospitalState || "Delhi"}</p>
                    <p class="font-sans text-sm font-semibold text-slate-700 ">{props.hospitalCity || "New Delhi"}</p>
                </div>
            </div>
            <div class="basis-1/4 xs:border-b-2 md:border-r-2 mr-2 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="font-sans text-md font-semibold text-slate-700 ml-2">{props.pay || "20000"}</p>

            </div>
            <div class="basis-1/4 xs:border-b-2 md:border-r-2 mr-2 flex justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p class="font-sans text-md font-semibold text-slate-700 ml-2">{props.jobDate || "03/09/2022"}</p>

            </div>


        </div>


    </div>
  )
}
