import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import LoginPage from './components/LoginPage'
import SideBar from './components/SideBar'
// import Dashboard from './components/Dashboard'
import KinerjaUtama from './components/KinerjaUtama'
import RencanaKinerja from './components/RencanaKinerja'

function App() {
  return (
  <BrowserRouter>
    <div className="flex h-screen overflow-hidden">
      <SideBar />
      <div className="p-5 flex-1 bg-white">
        <Routes>
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/ProgramKinerja' element={<KinerjaUtama />} />
          <Route path='/RencanaKinerja' element={<RencanaKinerja />} /> 
        </Routes>
      </div>
    </div>
  </BrowserRouter>
  )
} 

export default App

function Dashboard() {
  return <h2 className='text-black'>Ini Dashboard</h2>
}

// function KinerjaUtama() {
//   return <h2 className='text-black'>Ini Program Kinerja</h2>
// }
