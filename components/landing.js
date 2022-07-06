import React, {useState} from "react";
import Image from "next/image";
import DoctorImage from "../public/landingPhoto.jpg";
import DoctorImage2 from "../public/landingPhoto2.jpg";
import DoctorImage3 from "../public/landingPhoto3.jpg";
import ListPhoto from "../public/listPhoto.png";
import LoginForm from "./loginForm.js"
import FormFill from './formFill.js'
import {useRouter} from 'next/router'


export default function Landing() {
  const [active, setActive] = useState("landing");

  const Router = useRouter();
  

  // const backToLanding =() =>{
  //   // {active === "registrationFormFill" ? setActive("landing"):setActive("registrationFormFill")}
  //   if (active==="landing") {
  //     setActive("registrationFormFill")
  //   } else if (active=== "registrationFormFill"){
  //     setActive("landing")
  //   }
  // }


  const WhyUs =() => (
    
       <div class="mb-8 h-auto rounded-md bg-[#d1eefe]">
      <div class="flex flex-row m-4 justify-evenly flex-wrap  ">
  
        <div class="m-3 my-2 p-2 px-0 ml-4 ">
          <Image
            src={DoctorImage3}
            class="mr-2 pr-2 h-6 sm:h-9 rounded-3xl justify-self-center "
            alt="Locum Logo"
            width="470vw"
            height="390vh"
          />
        </div>
        <div class="m-4">
          <h1 class="font-sans font-bold text-left sm:text-left select-none text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            -CHOOSE US ? <br />
            <span class="  text-4xl sm:text-6xl text-slate-800">
              Why Locum ?
            </span>
          </h1>
          <div class="w-full ">
            <div class="flex justify-between m-4">
                <div class="m-4 ml-0 w-full">
                <Image src={ListPhoto} class="sm:h-9 justify-self-center " alt="Locum Logo" width="100%" height="100%"/>
                </div>
              
                <p class="max-w-fit break-words font-sans text-sm text-slate-500 select-none">Locum helps you connect with Doctors-On-Demand. It is the quickest
              interface between doctors and hospitals. Join us today and find a
              patient that needs your help and heal the world</p>
              
            </div>
            <div class="flex justify-between m-4">
                <div class="m-4 ml-0 w-full">
                <Image src={ListPhoto} class=" justify-self-center " alt="Locum Logo" width="100%" height="100%"/>
                </div>
              
                <p class="max-w-fit break-words font-sans text-sm text-slate-500 select-none">Locum helps you connect with Doctors-On-Demand. It is the quickest
              interface between doctors and hospitals. Join us today and find a
              patient that needs your help and heal the world</p>
              
            </div>

          </div>
          <div class="mt-3 text-center sm:text-left">
          <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 text-left sm:text-left" onClick={() => Router.push('/signup/register')}>Register Now</button>

  
          </div>
        </div>
      </div>
    </div>
    

  );



  const ProcessTimeline = () => (
    <div class="p-12 bg-[#0E185F] h-full rounded-xl border-rounded-md">
      <h1 class="mb-4 font-sans text-3xl sm:text-4xl font-bold text-slate-50 text-center sm:text-left select-none"> How It Works? </h1>
      <ol class="items-center sm:flex">
        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg
                class="w-3 h-3 text-blue-600 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div class="mt-3 border-2 rounded-lg p-2.5 mr-1.5 sm:pr-8 ">
            <time class="block mb-1.5 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Step 1
            </time>
            <h3 class="text-lg font-semibold text-slate-50 dark:text-white mb-2">
               Register on Locum
            </h3>
            <p class="text-base font-normal text-gray-400 dark:text-gray-400">
              Fill the onboarding form and log in using your credentials.
            </p>
          </div>
        </li>
        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg
                class="w-3 h-3 text-blue-600 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div class="mt-3 border-2 rounded-lg p-2.5 mr-1.5 sm:pr-8 ">
            <time class="block mb-1.5 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Step 2
            </time>
            <h3 class="text-lg font-semibold text-slate-50 dark:text-white mb-2">
              Submit KYC Documents 
            </h3>
            <p class="text-base font-normal text-gray-400 dark:text-gray-400">
              Submit your bank details and educational qualifications.
            </p>
          </div>
        </li>
        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg
                class="w-3 h-3 text-blue-600 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div class="mt-3 border-2 rounded-lg p-2.5 mr-1.5 sm:pr-8 ">
            <time class="block mb-1.5 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Step 3
            </time>
            <h3 class="text-lg font-semibold text-slate-50 dark:text-white mb-2">
              Work with Hospitals
            </h3>
            <p class="text-base font-normal text-gray-400 dark:text-gray-400">
              Choose from 100s of available on-demand jobs of your speciality.
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
  
  const FrontBanner = () => (
    
    <div class="m-5 mb-8 h-auto">
      <div class="flex m-4 justify-evenly flex-row flex-wrap  ">
        <div class="m-4">
          <h1 class="font-sans text-4xl sm:text-6xl font-bold text-slate-800 text-center sm:text-left select-none">
            Find Your Doctor <br />
            <span class="underline text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              10X Faster!
            </span>
          </h1>
          <div>
            <p class="mt-3 p-3 max-w-fit break-words font-sans text-sm text-slate-500 select-none">
              Locum helps you connect with Doctors-On-Demand. It is the quickest
              interface between doctors and hospitals. Join us today and find a
              patient that needs your help and heal the world.Locum helps you connect with Doctors-On-Demand. It is the quickest
              interface between doctors and hospitals. Join us today and find a
              patient that needs your help and heal the world.
            </p>
          </div>
          <div class="mt-3 text-center sm:text-left">
          <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 text-left sm:text-left" onClick={() => Router.push('/signup')}>Register Now</button>
          <a >
            <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500/50 dark:focus:ring-blue-800" onClick={() => Router.push('/login')} >
              Log In
            </button>
          </a>
  
          </div>
        </div>
  
        <div class="m-3 my-2 p-2 px-0 ml-4 ">
          <Image
            src={DoctorImage}
            class="mr-2 pr-2 h-6 sm:h-9 rounded-3xl justify-self-center shadow-xl shadow-sky-300"
            alt="Locum Logo"
            width="420vw"
            height="340vh"
          />
        </div>
      </div>
  
      <ProcessTimeline />
      <WhyUs />
    </div>
    
    
  );








  return (
    <div>
      {active === "landing" && 
      <FrontBanner /> 
      // <ProcessTimeline />
    }

 
    </div>
  );
}
