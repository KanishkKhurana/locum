import React , {useState} from "react";
import DoctorLoginForm from '../../components/doctorLoginForm'
import HospitalLoginForm from '../../components/hospitalLoginForm.js'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Navbar from '../../components/navbar.js'
import Footer from '../../components/footer.js'
import LoginForm from "../../components/loginForm.js"


export default function FormFill(props) {
    

    const Router = useRouter();




  return (

      
      
      
    <div class="h-fit" >
        <Navbar />
        <LoginForm />
        <Footer />  
    </div>
    
  );
}
