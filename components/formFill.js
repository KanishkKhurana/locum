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
            {/* <Link href={{pathname:"/signup/[role]",
                        query:{role:'hospital'}
        }}> */}
            
        <div>
        <input checked id="default-radio-1" type="radio" value="Hospital" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 m-1 mr-0 " onClick={()=>setUser("hospital")} />
            {/* </Link> */}
            <label for="default-radio-1" class="text-2xl ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hospital</label>
            {/* <Link href={{pathname:"/signup/[role]",
                        query:{role:'doctor'}
        }}> */}
        </div>
        <div class="ml-4">
        <input id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={()=>setUser("doctor")} />
            {/* </Link> */}
            <label for="default-radio-2" class="text-2xl ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 m-1">Doctor</label>
            </div>
        </div>
        </div>
    );

  return (

      
      
      
      <div>
        <Selector />
        {user === "hospital" && <HospitalLoginForm />}
        {user === "doctor" && <DoctorLoginForm />}  
    </div>      
    
  );
}



