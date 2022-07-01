import React from 'react'
import DoctorDetails from '../../components/doctorComponents/doctorDetails'
import DoctorJob from '../../components/doctorComponents/doctorJob'
import DoctorJobDetails from '../../components/doctorComponents/doctorJobDetails'
import DoctorNavbar from '../../components/doctorComponents/doctorNavbar'
import DoctorSearch from '../../components/doctorComponents/doctorSearch'




export default function Doctor() {
  return (
    <div>
        <DoctorNavbar />
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

        <DoctorJobDetails />
   
        </div>
      <script src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"></script>



    </div>
  )
}
