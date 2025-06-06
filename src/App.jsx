import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import SideBar from './components/SideBar'
import Dashboard from './components/Dashboard'
import KinerjaUtama from './components/KinerjaUtama'
import RencanaKinerja from './components/RencanaKinerja'

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}

export default App

function AppLayout() {
  const location = useLocation()
  const isLoginPage = location.pathname === '/'

  return (
    <div className="flex h-screen overflow-hidden">
      {!isLoginPage && <SideBar />}
      <div className="flex-1 bg-white">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/ProgramKinerja" element={<KinerjaUtama />} />
          <Route path="/RencanaKinerja" element={<RencanaKinerja />} />
        </Routes>
      </div>
    </div>
  )
}
