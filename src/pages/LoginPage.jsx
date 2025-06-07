// import React from 'react'
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_API_BASE_URL;
const secret = import.meta.env.VITE_API_SECRET;


function LoginPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ username: '', password: '' });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
     const response = await axios.post('/api/get-token', {
  secret,
  username: form.username,
  password: form.password,
});


      if (response.data.api_status === 1) {
        const token = response.data.data.access_token;
        localStorage.setItem('token', token);
        navigate('/Dashboard');
      } else {
        alert('Login gagal: ' + response.data.api_message);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Terjadi kesalahan saat login');
    }
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
            <form onSubmit={handleLogin}>
                <div className='block text-xl font-medium text-left'>
                    <label className='text-white'>Email</label>
                    <input
                      type="email"
                      name="username"
                      value={form.username}
                      onChange={(e) => setForm({ ...form, username: e.target.value })}
                      placeholder="Masukkan email Anda"
                      className="w-full px-3 py-2 rounded-lg bg-white focus:outline-none"
                    />
                </div>
                <div className='block text-xl font-medium text-left mt-2'>
                    <label className='text-white'>Password</label>
                    <input
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={(e) => setForm({ ...form, password: e.target.value })}
                      placeholder="Masukkan password Anda"
                      className="w-full px-3 py-2 rounded-lg bg-white focus:outline-none"
                    />
                </div>
                <button type="submit" className='bg-[#213854] mt-5 text-white text-xl w-full py-2 rounded-lg'>Masuk</button>
            </form>
        </div>
    </div>
  )
}

export default LoginPage
