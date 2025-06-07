import React, { useEffect, useState } from "react";
import CardListDetail from "../components/CardListDetail";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailProker = () => {
	const [editPopup, setEditPopup] = React.useState(false);
	const [confirmDelete, setConfirmPopup] = React.useState(false);
	const [DetailProkerData, setDetailProkerData] = useState([]);
	const { id, detailId } = useParams();

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
					setDetailProkerData(res.data.data);
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

	const foundData = Array.isArray(DetailProkerData)
		? DetailProkerData.find((item) => String(item.id) === String(detailId))
		: null;

	console.log("Filtered Data: ", foundData);

	const EditPopup = () => (
		<div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-xl">
				<h2 className="text-2xl font-bold mb-4">Edit Program Kerja</h2>
				<h3>Nama Program Kerja</h3>
				<input
					type="text"
					placeholder="Nama Program Kerja"
					value={foundData.program}
					className="w-full mb-2 p-2 border rounded"
				/>
				<h3>Tempat</h3>
				<input
					type="text"
					placeholder="Tempat"
					value={foundData.tempat}
					className="w-full mb-2 p-2 border rounded"
				/>
				<h3>Dana</h3>
				<input
					type="number"
					placeholder="Dana"
					value={foundData.dana}
					className="w-full mb-2 p-2 border rounded"
				/>
				<h3>Realisasi</h3>
				<input
					type="text"
					placeholder="Realisasi"
					value={foundData.realisasi}
					className="w-full mb-2 p-2 border rounded"
				/>
				<h3>Tanggal Mulai</h3>
				<input
					type="date"
					placeholder="Tanggal Mulai"
					value={foundData.start_date}
					className="w-full mb-2 p-2 border rounded"
				/>
				<h3>Tanggal Selesai</h3>
				<input
					type="date"
					placeholder="Tanggal Selesai"
					value={foundData.end_date}
					className="w-full mb-2 p-2 border rounded"
				/>
				<h3>Deskripsi</h3>
				<textarea
					placeholder="Deskripsi"
					value={foundData.deskripsi}
					className="w-full mb-2 p-2 border rounded"
				/>
				<div className="flex justify-end gap-x-4 mt-4">
					<button
						onClick={() => setEditPopup(false)}
						className="px-4 py-2 rounded bg-gray-300"
					>
						Batal
					</button>
					<button className="px-4 py-2 rounded bg-orangePrimary text-white">
						Simpan
					</button>
				</div>
			</div>
		</div>
	);

	const ConfirmDelete = () => (
		<div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
				<h2 className="text-xl font-semibold mb-4">
					Ingin menghapus Program Kerja?
				</h2>
				<div className="flex justify-end gap-x-4">
					<button
						onClick={() => setConfirmPopup(false)}
						className="px-4 py-2 rounded bg-gray-300"
					>
						Batal
					</button>
					<button className="px-4 py-2 rounded bg-redPrimary text-white">
						Hapus
					</button>
				</div>
			</div>
		</div>
	);

	return (
		<div className="h-screen overflow-y-auto">
			<header className="flex flex-col gap-y-2 p-6 sticky top-0 z-10 bg-white shadow-sm">
				<h1 className="font-bold text-4xl">Program Kerja</h1>
				<div className="flex flex-col">
					<div className="flex flex-row justify-between items-center">
						<h2 className="text-xl font-medium">
							{foundData ? foundData.program : "Loading..."}
						</h2>
						<div className="bg-orangePrimary text-white font-semibold py-2 px-24 rounded-lg flex flex-row items-center gap-x-2">
							Terlaksana
						</div>
					</div>
					<div className="w-full h-1 bg-greyPrimary my-2 rounded-lg"></div>
				</div>
			</header>

			{foundData ? (
				<CardListDetail item={foundData} key={foundData.id} />
			) : (
				<p className="text-center py-4">Tidak ada data yang ditemukan</p>
			)}

			<section className="px-6 mt-12 pb-6">
				<div className="w-full h-1 bg-greyPrimary my-2 rounded-lg"></div>
				<div className="flex gap-x-8 py-2">
					<button
						className="bg-orangePrimary text-white font-bold text-lg py-2 px-24 rounded-lg flex flex-row items-center gap-x-2"
						onClick={() => setEditPopup(true)}
					>
						<FaPencilAlt /> Edit
					</button>
					<button
						className="bg-redPrimary text-white font-bold text-lg py-2 px-24 rounded-lg flex flex-row items-center gap-x-2"
						onClick={() => setConfirmPopup(true)}
					>
						<FaTrash /> Delete
					</button>
				</div>
				<div className="w-full h-1 bg-greyPrimary my-2 rounded-lg"></div>
			</section>
			{editPopup && <EditPopup />}
			{confirmDelete && <ConfirmDelete />}
		</div>
	);
};

export default DetailProker;
