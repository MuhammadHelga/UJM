import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import CardKinerjaUtama from '../components/CardKinerjaUtama';
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
				const token = localStorage.getItem("token");

				const response = await axios.get("/skripsi_kinerja_utama", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
					params: {
						status: 1,
					},
				});

				if (response.data.api_status === 1) {
					setKinerjaData(response.data.data);
				} else {
					setError(response.data.api_message);
				}
			} catch (err) {
				setError(err.message);
				console.error("Error fetching data:", err);
			}
		};

		fetchKinerjaUtama();
	}, []);

	const filteredData = kinerjaData.filter((item) =>
		item.kinerja_utama.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="h-screen flex flex-col">
			<Header
				title="Kinerja Utama"
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
			/>
			<div className="overflow-y-auto flex-1 px-7">
				{filteredData.length > 0 ? (
					filteredData.map((item) => (
						<CardKinerjaUtama key={item.id} item={item} />
					))
				) : (
					<p className="text-center py-4">Tidak ada data yang ditemukan</p>
				)}
			</div>
		</div>
	);
}

export default KinerjaUtama;