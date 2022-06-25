import React , {useState} from "react";
import DoctorLoginForm from './doctorLoginForm'
import HospitalLoginForm from './hospitalLoginForm.js'
import Link from 'next/link'


export default function FormFill() {
    const [user, setUser] = useState("hospital");

    const Selector=() =>(
        <div class="flex justify-center items-center mb-4">
            <h1 class="m-5 font-sans"> I am a </h1>
            <Link href={{pathname:"/signup/[role]",
                        query:{role:'hospital'}
        }}>
        <input checked id="default-radio-1" type="radio" value="Hospital" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 m-5" onClick={()=>setUser("hospital")} />
            </Link>
            <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hospital</label>
            <Link href={{pathname:"/signup/[role]",
                        query:{role:'doctor'}
        }}>
        <input id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={()=>setUser("doctor")} />
            </Link>
            <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 m-5">Doctor</label>
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



