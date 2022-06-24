import React from "react";
import Navbar from "../navbar";
import Image from "next/image";
import DoctorImage from "../../public/doctor-photo.jpg";

// const ProcessTimeline = () => (
//   <div>
//     <ol class="items-center sm:flex">
//       <li class="relative mb-6 sm:mb-0">
//         <div class="flex items-center">
//           <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
//             <svg
//               class="w-3 h-3 text-blue-600 dark:text-blue-300"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fill-rule="evenodd"
//                 d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
//                 clip-rule="evenodd"
//               ></path>
//             </svg>
//           </div>
//           <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
//         </div>
//         <div class="mt-3 sm:pr-8">
//           <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
//             Flowbite Library v1.0.0
//           </h3>
//           <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
//             Released on December 2, 2021
//           </time>
//           <p class="text-base font-normal text-gray-500 dark:text-gray-400">
//             Get started with dozens of web components and interactive elements.
//           </p>
//         </div>
//       </li>
//       <li class="relative mb-6 sm:mb-0">
//         <div class="flex items-center">
//           <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
//             <svg
//               class="w-3 h-3 text-blue-600 dark:text-blue-300"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fill-rule="evenodd"
//                 d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
//                 clip-rule="evenodd"
//               ></path>
//             </svg>
//           </div>
//           <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
//         </div>
//         <div class="mt-3 sm:pr-8">
//           <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
//             Flowbite Library v1.2.0
//           </h3>
//           <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
//             Released on December 23, 2021
//           </time>
//           <p class="text-base font-normal text-gray-500 dark:text-gray-400">
//             Get started with dozens of web components and interactive elements.
//           </p>
//         </div>
//       </li>
//       <li class="relative mb-6 sm:mb-0">
//         <div class="flex items-center">
//           <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
//             <svg
//               class="w-3 h-3 text-blue-600 dark:text-blue-300"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fill-rule="evenodd"
//                 d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
//                 clip-rule="evenodd"
//               ></path>
//             </svg>
//           </div>
//           <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
//         </div>
//         <div class="mt-3 sm:pr-8">
//           <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
//             Flowbite Library v1.3.0
//           </h3>
//           <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
//             Released on January 5, 2022
//           </time>
//           <p class="text-base font-normal text-gray-500 dark:text-gray-400">
//             Get started with dozens of web components and interactive elements.
//           </p>
//         </div>
//       </li>
//     </ol>
//   </div>
// );

const iFrontBanner = () => (
  <div class="mb-4 mt-7 w-full">
    <div class="flex justify-between flex-wrap  ">
      <div class="mr-1 my-2 ml-2 w-[50%]">
        <h1 class="font-sans text-5xl sm:text-3xl font-bold text-slate-800 sm:text-left select-none">
          Find Your Doctor <br />
          <span class="underline text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            10X Faster!
          </span>
        </h1>
        <div>
          <p class="mt-3 break-words font-sans text-sm text-slate-500 select-none">
            Locum helps you connect with Doctors-On-Demand. It is the quickest
            interface between doctors and hospitals. Join us today and find a
            patient that needs your help and heal the world.
            Locum helps you connect with Doctors-On-Demand. It is the quickest
            interface between doctors and hospitals. Join us today and find a
            patient that needs your help and heal the world.
          </p>
        </div>
      </div>

      <div class="mx-5 my-2 w-[20%] hidden sm:inline ">
        <Image
          src={DoctorImage}
          class="mr-2 pr-2 h-6 sm:h-9 rounded-3xl justify-self-center border-8 border-double border-gray-50"
          alt="Locum Logo"
          width="200vw"
          height="280vh"
        />
      </div>
    </div>
  </div>
);

const FrontBanner=()=>(
  <div class="">
    <div class="flex justify-between flex-wrap  ">
      <div class="">
        <h1 class="font-sans text-6xl sm:text-3xl font-bold text-slate-800 sm:text-left select-none">
          Find Your Doctor <br />
          <span class="underline text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            10X Faster!
          </span>
        </h1>
        <div>
          <p class="break-words font-sans text-sm text-slate-500 select-none">
            Locum helps you connect with Doctors-On-Demand. It is the quickest
            interface between doctors and hospitals. Join us today and find a
            patient that needs your help and heal the world.
            Locum helps you connect with Doctors-On-Demand. It is the quickest
            interface between doctors and hospitals. Join us today and find a
            patient that needs your help and heal the world.
          </p>
        </div>
      </div>

      <div class=" hidden sm:inline ">
        <Image
          src={DoctorImage}
          class="mr-0 pr-2 h-6 sm:h-9 rounded-3xl justify-self-center border-8 border-double border-gray-50"
          alt="Locum Logo"
          width="200vw"
          height="280vh"
        />
      </div>
    </div>
  </div>
)



export default function landing() {
  return (
    <div>
      <FrontBanner />

      {/* <ProcessTimeline /> */}
    </div>
  );
}
