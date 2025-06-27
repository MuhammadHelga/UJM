import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CardProker from "../components/CardProker";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProgramKerja = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [addPopup, setAddPopup] = useState(false);
	const [ProkerData, setProkerData] = useState([]);
	const [error, setError] = useState(null);
	const { id } = useParams();

	const [addItem, setAddItem] = useState({
		program: "",
		tempat: "",
		dana: "",
		realisasi: "",
		start_date: "",
		end_date: "",
		status: "Terencana",
		deskripsi: "",
		tahun: "",
		bulan: "",
		ketua: "",
	});

	const fetchProkerData = async () => {
		try {
		const token = localStorage.getItem("token");
		const res = await axios.get("/skripsi_program_kerja", {
			headers: { Authorization: `Bearer ${token}` },
			params: { unit_rencana_program_id: id },
		});

		if (res.data.api_status === 1) {
			setProkerData(res.data.data);
			setError(null);
		} else {
			setError(res.data.api_message);
		}
		} catch (err) {
		setError("Gagal memuat data: " + err.message);
		}
	};

	useEffect(() => {
		fetchProkerData();
	}, [id]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setAddItem((prev) => ({ ...prev, [name]: value }));
	};

	const handleAddSubmit = async () => {
		try {
			const token = localStorage.getItem("token");
			const res = await axios.post("/skripsi_program_kerja_add", {
				program: addItem.program,
				tempat: addItem.tempat,
				dana: addItem.dana,
				realisasi: addItem.realisasi,
				start_date: addItem.start_date,
				end_date: addItem.end_date,
				status: addItem.status,
				deskripsi: addItem.deskripsi,
				tahun: addItem.tahun,
				bulan: addItem.bulan,
				ketua: addItem.ketua,
				unit_rencana_program_id: id
				}, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			if (res.data.api_status === 1) {
				setAddPopup(false);
				setAddItem({
					program: "",
					tempat: "",
					dana: "",
					realisasi: "",
					start_date: "",
					end_date: "",
					status: "Terencana",
					deskripsi: "",
					tahun: "",
					bulan: "",
					ketua: "",
				});
				setError(null);
				fetchProkerData();
			} else {
				setError(res.data.api_message);
			}
		} catch (err) {
			setError(err.message);
			console.error("Error adding data:", err);
		}
	};


	const filteredData = ProkerData.filter((item) =>
		item.program.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const renderAddPopup = () => (
		<div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-xl max-h-[90vh] overflow-y-auto">
				<h2 className="text-2xl font-bold mb-4">Tambah Program Kerja</h2>

				{[
					{
						label: "Nama Program Kerja",
						name: "program",
						type: "text",
						placeholder: "Nama Program",
					},
					{
						label: "Tempat",
						name: "tempat",
						type: "text",
						placeholder: "Tempat",
					},
					{
						label: "Dana",
						name: "dana",
						type: "number",
						placeholder: "Nominal Dana",
					},
					{
						label: "Realisasi",
						name: "realisasi",
						type: "text",
						placeholder: "Realisasi",
					},
					{
						label: "Tanggal Mulai",
						name: "start_date",
						type: "date",
						placeholder: "Tanggal Mulai",
					},
					{
						label: "Tanggal Selesai",
						name: "end_date",
						type: "date",
						placeholder: "Tanggal Selesai",
					},
				].map(({ label, name, type, placeholder }) => (
					<div key={name}>
						<label>{label}</label>
						<input
							type={type}
							name={name}
							placeholder={placeholder}
							value={addItem[name]}
							onChange={handleChange}
							className="w-full mb-2 p-2 border rounded"
						/>
					</div>
				))}

				<h3>Tahun</h3>
				<input
					type="text"
					placeholder="Tahun"
					className="w-full mb-2 p-2 border rounded"
					name="tahun"
					value={addItem.tahun}
					onChange={handleChange}
				/>

				<h3>Bulan</h3>
				<input
					type="text"
					placeholder="Bulan"
					className="w-full mb-2 p-2 border rounded"
					name="bulan"
					value={addItem.bulan}
					onChange={handleChange}
				/>

				<h3>Ketua</h3>
				<input
					type="text"
					placeholder="Ketua"
					className="w-full mb-2 p-2 border rounded"
					name="ketua"
					value={addItem.ketua}
					onChange={handleChange}
				/>

				<label>Status</label>
				<select
					name="status"
					value={addItem.status}
					onChange={handleChange}
					className="w-full mb-2 p-2 border rounded"
				>
					<option value="Terencana">Terencana</option>
					<option value="Berjalan">Berjalan</option>
					<option value="Terlaksana">Terlaksana</option>
					<option value="Dibatalkan">Dibatalkan</option>
				</select>

				<label>Deskripsi</label>
				<textarea
					name="deskripsi"
					value={addItem.deskripsi}
					placeholder="Deskripsi Program Kerja"
					onChange={handleChange}
					className="w-full mb-2 p-2 border rounded"
				/>

				<div className="flex justify-end gap-x-4 mt-4">
					<button
						onClick={() => setAddPopup(false)}
						className="px-4 py-2 bg-gray-300 rounded"
					>
						Batal
					</button>
					<button
						onClick={handleAddSubmit}
						className="px-4 py-2 bg-greenPrimary text-white rounded"
					>
						Tambah
					</button>
				</div>

				{error && <p className="text-red-500 mt-2">{error}</p>}
			</div>
		</div>
	);

	return (
		<section className="h-screen flex flex-col">
			<Header
				title="Program Kerja"
				add={true}
				onAdd={() => setAddPopup(true)}
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
			/>

			<div className="px-6 overflow-y-auto grid grid-cols-2 md:grid-cols-1 flex-1 gap-4 mb-6">
				{filteredData.length > 0 ? (
					filteredData.map((item, index) => (
						<CardProker key={index} item={item} />
					))
				) : (
					<p className="text-center py-4">Tidak ada data yang ditemukan</p>
				)}
			</div>

			{addPopup && renderAddPopup()}
		</section>
	);
};

export default ProgramKerja;
