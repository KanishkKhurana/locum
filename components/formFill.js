import React , {useState} from "react";
import DoctorLoginForm from './doctorLoginForm'
import HospitalLoginForm from './hospitalLoginForm.js'
import Link from 'next/link'


export default function FormFill() {
    const [user, setUser] = useState("hospital");

    const Selector=() =>(
        <div class="flex justify-center">
            <div class=" flex flex-row justify-center bg-gradient-to-b from-sky-100 shadow-md shadow-cyan-200/50  border border-sky-500 rounded-lg w-[75%]  py-1 px-6">
                <h1 class="font-medium font-sans mr-5 text-2xl"> I am a </h1>

                <div class="inline-flex rounded-md shadow-sm" role="group">
                <button type="button" class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white" onClick={()=>setUser("hospital")}>
                    Hospital
                </button>
                <button type="button" class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white" onClick={()=>setUser("doctor")}>
                    Settings
                </button>
            </div>
        </div>
    )

  return (

      
      
      
      <div>
        <Selector />
        {user === "hospital" && <HospitalLoginForm />}
        {user === "doctor" && <DoctorLoginForm />}  
    </div>      
    
  );
}
