import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setUserEmail(storedEmail);
    }
  }, []);


  return (
    <aside className='h-screen text-white bg-white'>
      <nav className='h-full flex flex-col bg-[#213854] border-r shadow-sm w-80 p-5'>
          <div className='bg-[#2981AA] p-3 rounded-lg'>
          <h1 className='text-xl text-center'>{userEmail || 'User'}</h1>
          </div>
        <h1 className='text-xl mt-4 text-[#A6A6A6]'>Halaman</h1>
        <Link to='/Dashboard'>
          <div className='bg-[#2981AA] hover:bg-[#389BC9] p-3 rounded-lg text-center mt-4'>
            <button className='text-xl'>Dashboard</button>
          </div>
        </Link>

        <Link to='/ProgramKinerja'>
          <div className='bg-[#2981AA] hover:bg-[#389BC9] p-3 rounded-lg text-center mt-4'>
            <button className='text-xl'>Program dan Kinerja</button>
          </div>
        </Link>
      </nav>
    </aside>
  )
}

export default SideBar
