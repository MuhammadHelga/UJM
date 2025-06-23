import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import CardRencanaProker from "../components/CardRencanaProker";
import axios from "axios";
import { useParams } from "react-router-dom";

const RencanaProker = () => {
	const [RencanaProkerData, setRencanaProkerData] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const { id } = useParams();

	useEffect(() => {
		const fetchThisData = async () => {
			try {
				const token = localStorage.getItem("token");
				const res = await axios.get("/skripsi_rencana_program", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
					params: { unit_rencana_kinerja_id: id },
				});
				if (res.data.api_status === 1) {
					setRencanaProkerData(res.data.data);
				} else {
					setError(res.data.api_message);
				}
			} catch (err) {
				setError(err.message);
				console.error("Error fetching data:", err);
			}
		};
		fetchThisData();
	}, []);

	const filteredData = RencanaProkerData.filter((item) =>
		item.rencana_program.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<section className="h-screen flex flex-col">
			<Header
				title="Rencana Program Kerja"
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
			/>
			<div className="px-6 overflow-y-auto grid grid-cols-2 md:grid-cols-1 gap-6 mb-6">
				{filteredData.length > 0 ? (
					filteredData.map((item, index) => (
						<CardRencanaProker key={index} item={item} />
					))
				) : (
					<p className="text-center py-4">Tidak ada data yang ditemukan</p>
				)}
			</div>
		</section>
	);
};

export default RencanaProker;
