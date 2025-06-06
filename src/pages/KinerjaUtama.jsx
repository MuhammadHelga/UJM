import React, { useState, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function KinerjaUtama() {
  const navigate = useNavigate();
  const [kinerjaData, setKinerjaData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const today = new Date().toLocaleDateString('id-ID', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  useEffect(() => {
    const fetchKinerjaUtama = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log("TOKEN:", token);
        
        const response = await axios.get('/skripsi_kinerja_utama', {
          headers: {
            'Authorization': `Bearer ${token}`
          },
          params: {
            status: 1
          }
        });

        console.log("DATA DARI API:", response.data);

        if (response.data.api_status === 1) {
          setKinerjaData(response.data.data);
        } else {
          setError(response.data.api_message);
        }
      } catch (err) {
        setError(err.message);
        console.error('Error fetching data:', err);
      } 
      // finally {
      //   setLoading(false);
      // }
    };

    fetchKinerjaUtama();
  }, []);

  const filteredData = kinerjaData.filter(item =>
  item.kinerja_utama.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div className="min-h-screen p-7">
      <h1 className='text-3xl font-bold mb-4'>Kinerja Utama</h1>
      
      <div className='flex justify-between items-center mb-4'>
        <div className='flex gap-2 w-full max-w-[75%]'>
          <input
            type="text"
            placeholder='Cari...'
            className='border border-black rounded-lg p-3 w-full'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='bg-[#213854] text-white rounded-lg p-4'>
            <FaSearch />
          </button>
        </div>
        <span className='bg-[#213854] text-white p-4 rounded-lg text-xl ml-4 whitespace-nowrap'>
          {today}
        </span>
      </div>

      <div className='overflow-y-auto max-h-screen pr-2'>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div key={item.id} className="bg-[#DDF4FF] border p-4 mb-4 rounded-md w-full flex flex-row justify-between items-center">
              <div className='flex flex-col'>
                <h3 className="font-semibold">{item.kinerja_utama}</h3>
                <p>Periode: {item.start_periode} s/d {item.end_periode}</p>
              </div>
              <button 
                onClick={() => navigate(`/RencanaKinerja/${item.id}`)}
                className="bg-[#2981AA] text-white px-4 py-2 rounded-lg"
              >
                Lihat Detail
              </button>
            </div>
          ))
        ) : (
          <p className="text-center py-4">Tidak ada data yang ditemukan</p>
        )}
      </div>
    </div>
  );
}

export default KinerjaUtama;