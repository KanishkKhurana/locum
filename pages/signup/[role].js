import React , { useRouter } from 'next/router'
import HospitalLoginForm from '../../components/hospitalLoginForm.js'
import DoctorLoginForm from '../../components/doctorLoginForm.js'




export default function Signup (){
    const router = useRouter();
    console.log(router)
    const {role} = router.query
    console.log("i am "+role)
    
    return (
        {if(role === "hospital"){
            return <HospitalLoginForm />;
        }else{
            return <DoctorLoginForm />;
        }}
    )

    
        
}



