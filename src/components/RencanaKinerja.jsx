import React from 'react'
import { FaSearch } from "react-icons/fa";

function RencanaKinerja() {
    const today = new Date().toLocaleDateString('id-ID', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
      <div className="min-h-screen p-7">
        
    <h1 className='text-3xl font-bold mb-4'>Rencana Kinerja</h1>
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
            <section 
                key={index} 
                className='bg-[#DDF4FF] border border-black rounded-lg mb-4 p-4 text-lg text-gray-900'
            >
                <header class="flex justify-between items-start mb-3">
                    <h3 class="font-bold">Rencana Kerja : Menghasilkan mahasiswa yang menyelesaikan program magang (PKL)</h3>
                    <button type="button" className="bg-[#2981AA] text-white text-lg font-semibold rounded-lg px-4 py-1">
                        Lihat Detail
                    </button>
                </header>
                <dl class="grid grid-cols-[auto_1fr] gap-x-2 gap-y-1 text-lg">
                    <dt class="font-semibold">Unit Kinerja Utama ID</dt>
                    <dd class="whitespace-nowrap">: 2</dd>

                    <dt class="font-semibold">Indikator</dt>
                    <dd>: Jumlah mahasiswa yang menyelesaikan program magang</dd>

                    <dt class="font-semibold">Target Indikator</dt>
                    <dd class="whitespace-nowrap">: 4</dd>

                    <dt class="font-semibold">Satuan</dt>
                    <dd class="whitespace-nowrap">: Mahasiswa</dd>
                </dl>
            </section>
          ))}
        </div>
      </div>
    )
}

export default RencanaKinerja
