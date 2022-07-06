import React, { useState } from 'react'
import DoctorEachPastJob from './doctorEachPastJob';
import Image from "next/image";
import logo from "/public/doctor-photo.jpg";


export default function DoctorMyjobs(props) {
    const [myjobs, setMyobs] = useState("recentJobs");


    const Jobs = () => {
        <div class="p-4 bg-sky-200">
            <div>
                <h3>Job Name</h3>


            </div>
        </div>

    }



    return (
        <div class="flex justify-around flex-col sm:flex-row">
            <div class="m-4 w-[75vw] ">



                <div class="sm:hidden">
                    <label for="tabs" class="sr-only">Select </label>
                    <select id="tabs" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>Recent Jobs</option>
                        <option>Past Jobs</option>
                    </select>
                </div>
                <ul class="hidden text-md font-medium font-sans border text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                    <li class="w-full">
                        <a href="#" class="inline-block p-4 w-full  text-gray-900  rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page">Recent Jobs</a>
                    </li>
                    <li class="w-full">
                        <a href="#" class="inline-block p-4 w-full bg-white rounded-r-lg  hover:text-gray-700 hover:bg-gray-50 focus:bg-gray-100 focus:ring-4 focus:ring-blue-300 text-gray-900 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Past Jobs</a>
                    </li>

                </ul>


                <DoctorEachPastJob />
            </div>
            <div class="flex justify-center">
                <div class="md:w-[25vw] w-full" >
                <div class="w-full rounded-lg border border-slate-300 shadow-md h-fit m-4 mt-4 ml-0 pl-0 ">
                    <div class="flex justify-evenly flex-col md:flex-row  items-center">
                       
                        <div class="mx-1 mt-1 text-center md:text-left mb-2">
                            
                            <h1 class="font-sans text-xl antialiased font-bold text-slate-900 capitalize mb-2">{props.hospitalName || "Income This Month"}</h1>
                            <span class="bg-blue-100 text-blue-800 text-md font-medium mr-2 px-2.5 py-1 rounded dark:bg-blue-200 dark:text-blue-800">{props.specialityReqd || "ENT"}</span>

     
                        </div>
                        <div>
                            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-md px-5 py-2.5 text-center h-fit  m-3 mb-1"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>20000</button>
                        </div>
                    </div>


                    <div>
                        <div class=" ">
                            <p class="font-sans font-normal p-3 text-slate-700 text-left overflow-y-auto ">{props.details || "Medicity Hospital"}  ({props.jobDate || "02/06/2022"})</p>
                            <p class="font-sans font-normal p-3 text-slate-700 text-left overflow-y-auto ">{props.details || "Medicity Hospital"}  ({props.jobDate || "02/06/2022"})</p>
                            <p class="font-sans font-normal p-3 text-slate-700 text-left overflow-y-auto ">{props.details || "Medicity Hospital"}  ({props.jobDate || "02/06/2022"})</p>
                            <p class="font-sans font-normal p-3 text-slate-700 text-left overflow-y-auto ">{props.details || "Medicity Hospital"}  ({props.jobDate || "02/06/2022"})</p>
                        {/* foreach can be used here for the p tags                             */}

                        </div>
                    </div>



                    </div>
                </div>
            </div>
        </div>

    )
}
