import React, {useState} from 'react'
import AdminSidebar from '../../components/adminComponents/adminSidebar'
import AdminDashboard from '../../components/adminComponents/adminDashboard'
import AdminHospitals from '../../components/adminComponents/adminHospitals'
import AdminDoctors from '../../components/adminComponents/adminDoctors'
import AdminJobs from '../../components/adminComponents/adminJobs'
import AdminAnnouncement from '../../components/adminComponents/adminAnnouncement'


export default function Admin() {
    // const [view, setView] = useState("Dashboard")
  return (
    <div>
        <AdminSidebar />
    {/* <div class="relative ml-[21vw]">
        {view =="Dashboard" && <AdminDashboard setView={setView} />}
        {view =="Hospitals" && <AdminHospitals setView={setView} />}
        {view =="Doctors" && <AdminDoctors setView={setView} />}
        {view =="Jobs" && <AdminJobs setView={setView} />}

    </div> */}
    
    </div>

  )
}
