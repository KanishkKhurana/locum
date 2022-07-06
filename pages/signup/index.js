import React , {useState} from "react";
import DoctorLoginForm from '../../components/doctorLoginForm'
import HospitalLoginForm from '../../components/hospitalLoginForm.js'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Navbar from '../../components/navbar.js'
import Footer from '../../components/footer.js'


export default function FormFill(props) {
    const [user, setUser] = useState("hospital");

    const Router = useRouter();



    const Selector=() =>(
        <div class="flex justify-center">
                
                <button class="left-0 md:text-md text-xs" onClick={() => {Router.push('/')}}> &larr; Back</button>
                
            <div class=" flex flex-row justify-center border-t border-b w-[75%]  py-1 px-6">
                <div class="mt-1"><h1 class="font-sans mr-2.5 text-md md:text-2xl "> I am a </h1></div>

                <div class="inline-flex rounded-md shadow-sm" role="group">
                <button type="button"  class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white" onClick={()=>setUser("hospital")}>
                    Hospital
                </button>
                <button type="button" class="py-2 px-4 text-sm font-medium text-gray-900 rounded-r-lg bg-white border-t border-b border-r border-gray-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white" onClick={()=>setUser("doctor")}>
                    Doctor
                </button>
            </div>
        </div>
        </div>
    )

  return (

      
      
      
      <div>
        <Navbar />
        <Selector />
        {user === "hospital" && <HospitalLoginForm />}
        {user === "doctor" && <DoctorLoginForm />}
        <Footer />  
    </div>      
    
  );
}
