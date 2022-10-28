import React from 'react'
import SideBar from '../components/SideBar'
import { Routes, Route } from 'react-router-dom';
import DashboardHeader from '../components/DashboardHeader'
import Team from '../dashboardComponents/Team';
import Portfolio from '../dashboardComponents/Portfolio';
import Service from '../dashboardComponents/Service';
import Messages from '../dashboardComponents/Messages';
import ResetPassword from '../components/ChangePassword';

const DashRoute = () => {
  return (
    <>
      <div className='flex flex-col min-h-screen bg-black'>
        <DashboardHeader />
        <SideBar style="hidden lg:flex" />
        <Routes>
          <Route path="/team" element={<Team />} />
          <Route path="/portfolio" element={(<Portfolio />)} />
          <Route path="/service" element={<Service />} />
          <Route path="/message" element={<Messages />} />
          <Route path="/change/password/:userId" element={<ResetPassword />} />
        </Routes>
      </div>
    </>

  )
}

export default DashRoute

