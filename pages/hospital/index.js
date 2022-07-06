import React from 'react'
import DoctorNavbar from "../../components/doctorComponents/doctorNavbar"
import DoctorDetails from '../../components/doctorComponents/doctorDetails'
import DoctorSearch from '../../components/doctorComponents/doctorSearch'
import DoctorJob from '../../components/doctorComponents/doctorJob'
import HospitalPostJob from '../../components/hospitalComponents/hospitalPostJob'

export default function Hospital() {
  return (
    <div>
      <DoctorNavbar/>
      <div class="flex justify-evenly flex-col md:flex-row sm:px-4 ">
        <DoctorDetails />
        <div class="mx-4 " >
            <DoctorSearch/>
        <DoctorJob />
        <DoctorJob />
        <DoctorJob />
        <DoctorJob />
        <DoctorJob />
        <DoctorJob />
        <DoctorJob />
        <DoctorJob />
        <DoctorJob />
        <DoctorJob />
        </div>
        <HospitalPostJob/>
        
   
        </div>
      <script src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"></script>
      <script src="../path/to/flowbite/dist/datepicker.js"></script>


    </div>
  )
}
