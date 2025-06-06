import React from 'react'
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/Dashboard');
  };

  return (
    <div className="bg-[#213854] min-h-screen min-w-screen flex flex-col items-center justify-center">
        <img
          src="src/assets/logo-dsi.png"
          alt="Logo"
          className="mx-auto mb-6 w-48"
        />
        <div className="items-center justify-center bg-[#2981AA] p-10 rounded-lg">
            <h2 className='text-white text-5xl font-semibold mb-10 text-center'>Masuk</h2>
            <form onSubmit={handleSubmit}>
                <div className='block text-xl font-medium text-left'>
                    <label className='text-white'>Email</label>
                    <input type="email"
                placeholder="Masukkan email Anda"
                className="w-full px-3 py-2 rounded-lg bg-whitefocus:outline-none"/>
                </div>
                <div className='block text-xl font-medium text-left mt-2'>
                    <label className='text-white'>Password</label>
                    <input type="password"
                placeholder="Masukkan password Anda"
                className="w-full px-3 py-2 rounded-lg bg-white focus:outline-none"/>
                </div>
                <button type="submit" className='bg-[#213854] mt-5 text-white text-xl w-full py-2 rounded-lg'>Masuk</button>
            </form>
        </div>
    </div>
  )
}

export default LoginPage
