import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CardProker from "../components/CardProker";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProgramKerja = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [addPopup, setAddPopup] = useState(false);
	const [ProkerData, setProkerData] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const fetchProkerData = async () => {
			try {
				const token = localStorage.getItem("token");
				console.log("Token: ", token);
				console.log("Id Param: ", id);

				const res = await axios.get("/skripsi_program_kerja", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
					params: { unit_rencana_program_id: id },
				});
				console.log("Data Api: ", res.data);
				if (res.data.api_status === 1) {
					setProkerData(res.data.data);
				} else {
					setError(res.data.api_message);
				}
			} catch (err) {
				setError(err.message);
				console.error("Error fetching data:", err);
			}
		};
		fetchProkerData();
	}, []);

	const filteredData = ProkerData.filter((item) =>
		item.program.toLowerCase().includes(searchTerm.toLocaleLowerCase())
	);

	const AddPopup = () => (
		<div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-xl">
				<h2 className="text-2xl font-bold mb-4">Tambah Program Kerja</h2>
				<h3>Nama Program Kerja</h3>
				<input
					type="text"
					placeholder="Nama Program Kerja"
					className="w-full mb-2 p-2 border rounded"
				/>
				<h3>Tempat</h3>
				<input
					type="text"
					placeholder="Tempat"
					className="w-full mb-2 p-2 border rounded"
				/>
				<h3>Dana</h3>
				<input
					type="number"
					placeholder="Dana"
					className="w-full mb-2 p-2 border rounded"
				/>
				<h3>Realisasi</h3>
				<input
					type="text"
					placeholder="Realisasi"
					className="w-full mb-2 p-2 border rounded"
				/>
				<h3>Tanggal Mulai</h3>
				<input type="date" className="w-full mb-2 p-2 border rounded" />
				<h3>Tanggal Selesai</h3>
				<input type="date" className="w-full mb-2 p-2 border rounded" />
				<h3>Deskripsi</h3>
				<textarea
					placeholder="Deskripsi"
					className="w-full mb-2 p-2 border rounded"
				/>
				<div className="flex justify-end gap-x-4 mt-4">
					<button
						onClick={() => setAddPopup(false)}
						className="px-4 py-2 rounded bg-gray-300"
					>
						Batal
					</button>
					<button className="px-4 py-2 rounded bg-greenPrimary text-white">
						Tambah
					</button>
				</div>
			</div>
		</div>
	);

	return (
		<section className="h-screen flex flex-col">
			<section className="h-screen flex flex-col">
				<Header
					title="Program Kerja"
					add={true}
					onAdd={() => setAddPopup(true)}
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
				/>
				<div className="px-6 overflow-y-auto grid grid-cols-2 md:grid-cols-1 gap-4 mb-6">
					{filteredData.length > 0 ? (
						filteredData.map((item, index) => (
							<CardProker key={index} item={item} />
						))
					) : (
						<p className="text-center py-4">Tidak ada data yang ditemukan</p>
					)}
				</div>
			</section>
			{addPopup && <AddPopup />}
		</section>
	);
};

export default ProgramKerja;
