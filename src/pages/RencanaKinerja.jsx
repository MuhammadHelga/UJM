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
				const token = localStorage.getItem("token");

				const response = await axios.get("/skripsi_rencana_kinerja", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
					params: { unit_kinerja_utama_id: id },
				});

				if (response.data.api_status === 1) {
					setRencanaKinerjaData(response.data.data);
				} else {
					setError(response.data.api_message);
				}
			} catch (err) {
				setError(err.message);
				console.error("Error fetching data:", err);
			}
		};

		fetchRencanaKinerja();
	}, []);

	const filteredData = rencanaKinerjaData.filter((item) =>
		item.rencana_kinerja.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="h-screen flex flex-col">
			<Header
				title="Rencana Kinerja"
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
			/>

			<div className="overflow-y-auto flex-1 px-7">
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
