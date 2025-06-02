import React from 'react'
import { FaSearch } from "react-icons/fa";

function KinerjaUtama() {
  const today = new Date().toLocaleDateString('id-ID', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <div className="min-h-screen p-4">
      <h1 className='text-3xl font-bold mb-4'>Kinerja Utama</h1>
      
      <div className='flex justify-between items-center mb-4'>
        <div className='flex gap-2 w-full max-w-[75%]'>
          <input
            type="text"
            placeholder='Cari...'
            className='border border-black rounded-lg p-3 w-full'
          />
          <button className='bg-[#213854] text-white rounded-lg p-4'><FaSearch /></button>
        </div>
        <span className='bg-[#213854] text-white p-4 rounded-lg text-xl ml-4 whitespace-nowrap'>
          {today}
        </span>
      </div>

      <div className='overflow-y-auto max-h-screen pr-2'>
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="bg-[#DDF4FF] border p-4 mb-4 rounded-md w-full flex flex-row justify-between items-center">
            <div className='flex flex-col'>
              <h3 className="font-semibold">Mahasiswa Bekerja di Luar Kampus Departemen Sistem Informasi</h3>
              <p>Periode: 01-07-2022 s/d 31-12-2022</p>
            </div>
            <button className="bg-[#2981AA] text-white px-4 py-2 rounded">Lihat Detail</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default KinerjaUtama
