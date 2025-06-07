import React, { useState, useEffect } from 'react';
import CardRencanaKinerja from '../components/CardRencanaKinerja';
import Header from '../components/Header'
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

function RencanaKinerja() {
	const navigate = useNavigate();
	const { id } = useParams();
	const [rencanaKinerjaData, setRencanaKinerjaData] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

    const today = new Date().toLocaleDateString('id-ID', {
		weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
	});

	useEffect(() => {
    const fetchRencanaKinerja = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log("TOKEN:", token);
        
        const response = await axios.get('/skripsi_rencana_kinerja', {
          headers: {
            'Authorization': `Bearer ${token}`
          },
          params: { unit_kinerja_utama_id: id }
        });

        console.log("DATA DARI API:", response.data);

        if (response.data.api_status === 1) {
          setRencanaKinerjaData(response.data.data);
        } else {
          setError(response.data.api_message);
        }
      } catch (err) {
        setError(err.message);
        console.error('Error fetching data:', err);
      } 
    };

    fetchRencanaKinerja();
  }, []);

  const filteredData = rencanaKinerjaData.filter(item =>
    item.rencana_kinerja.toLowerCase().includes(searchTerm.toLowerCase())
  );
	
	return (
		<div className="min-h-screen">
			<Header title="Rencana Kinerja" />

			<div className="overflow-y-auto max-h-screen px-7">
        {filteredData.length > 0 ? (
  filteredData.map((item, index) => (
    <CardRencanaKinerja key={index} item={item} />
  ))
) : (
  <p className="text-center py-4">Tidak ada data yang ditemukan</p>
)}

      </div>
		</div>
	);
}

export default RencanaKinerja
