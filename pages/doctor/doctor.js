import React from 'react'
import DoctorDetails from '../../components/doctorComponents/doctorDetails'
import DoctorJob from '../../components/doctorComponents/doctorJob'
import DoctorNavbar from '../../components/doctorComponents/doctorNavbar'




export default function Doctor() {
  return (
    <div>
        <DoctorNavbar />
        <div class="flex justify-evenly flex-col md:flex-row px-4">
        <DoctorDetails />
        <div class="ml-4">
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
        </div>
      <script src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"></script>



    </div>
  )
}
