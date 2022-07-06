import React from 'react'
import AdminHeader from './adminHeader'
import AdminAnnouncement from './adminAnnouncement'
import AdminDashboardCard from './adminDashboardCard'


export default function AdminDashboard() {
  return (
    <div>
        <AdminHeader />
        <AdminAnnouncement />
        <div class="flex flex-row justify-around">
            <AdminDashboardCard name="Hospital" value='31' />
            <AdminDashboardCard name="Doctors" value='51' />
        </div>
    </div>
  )
}
