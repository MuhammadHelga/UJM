import React from "react";
import CardListDetail from "../components/CardListDetail";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const DetailProker = () => {
	const [editPopup, setEditPopup] = React.useState(false);
	const [confirmDelete, setConfirmPopup] = React.useState(false);

	const EditPopup = () => (
		<div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-xl">
				<h2 className="text-2xl font-bold mb-4">Edit Program Kerja</h2>
				<h3>Nama Program Kerja</h3>
				<input type="text" placeholder="Nama Program Kerja" className="w-full mb-2 p-2 border rounded" />
				<h3>Tempat</h3>
				<input type="text" placeholder="Tempat" className="w-full mb-2 p-2 border rounded" />
				<h3>Dana</h3>
				<input type="number" placeholder="Dana" className="w-full mb-2 p-2 border rounded" />
				<h3>Realisasi</h3>
				<input type="text" placeholder="Realisasi" className="w-full mb-2 p-2 border rounded" />
				<h3>Tanggal Mulai</h3>
				<input type="date" placeholder="Tanggal Mulai" className="w-full mb-2 p-2 border rounded" />
				<h3>Tanggal Selesai</h3>
				<input type="date" placeholder="Tanggal Selesai" className="w-full mb-2 p-2 border rounded" />
				<h3>Deskripsi</h3>
				<textarea placeholder="Deskripsi" className="w-full mb-2 p-2 border rounded" />
				<div className="flex justify-end gap-x-4 mt-4">
					<button onClick={() => setEditPopup(false)} className="px-4 py-2 rounded bg-gray-300">Batal</button>
					<button className="px-4 py-2 rounded bg-orangePrimary text-white">Simpan</button>
				</div>
			</div>
		</div>
	);

	const ConfirmDelete = () => (
		<div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
				<h2 className="text-xl font-semibold mb-4">Ingin menghapus Program Kerja?</h2>
				<div className="flex justify-end gap-x-4">
					<button onClick={() => setConfirmPopup(false)} className="px-4 py-2 rounded bg-gray-300">Batal</button>
					<button className="px-4 py-2 rounded bg-redPrimary text-white">Hapus</button>
				</div>
			</div>
		</div>
	);

	const details = [
		{ title: "Ketua", value: "Pak Dwija" },
		{ title: "Dana", value: "xxxxxxxxxxxx" },
		{ title: "StartDate", value: "xxxx-xx-xx" },
		{ title: "EndDate", value: "xxxx-xx-xx" },
		{ title: "Tempat", value: "xxxxxxxxx" },
		{ title: "Realisasi", value: "xxxxxx" },
		{ title: "Tahun", value: "xxxx" },
		{ title: "Bulan", value: "xxxxxxx" },
		{ title: "Deskripsi", value: "xxxxxxxxxxxxxxxxxxxxxx" },
	];

	return (
		<div className="h-screen overflow-y-auto">
			<header className="flex flex-col gap-y-2 p-6 sticky top-0 z-10 bg-white shadow-sm">
				<h1 className="font-bold text-4xl">Program Kerja</h1>
				<div className="flex flex-col">
					<div className="flex flex-row justify-between items-center">
						<h2 className="text-xl font-medium">Seminar Organisasi</h2>
						<div className="bg-orangePrimary text-white font-semibold py-2 px-24 rounded-lg flex flex-row items-center gap-x-2">
							Terlaksana
						</div>
					</div>
					<div className="w-full h-1 bg-greyPrimary my-2 rounded-lg"></div>
				</div>
			</header>

			<section className="px-6 grid grid-cols-2 gap-x-12 gap-y-2 pb-6">
				{details.map((item, index) => (
					<div
						key={index}
						className={item.title === "Deskripsi" ? "col-span-2" : ""}
					>
						<CardListDetail title={item.title} value={item.value} />
					</div>
				))}
			</section>

			<section className="px-6 mt-12 pb-6">
				<div className="w-full h-1 bg-greyPrimary my-2 rounded-lg"></div>
				<div className="flex gap-x-8 py-2">
					<button className="bg-orangePrimary text-white font-bold text-lg py-2 px-24 rounded-lg flex flex-row items-center gap-x-2"
					onClick={() => setEditPopup(true)}>
						<FaPencilAlt /> Edit
					</button>
					<button className="bg-redPrimary text-white font-bold text-lg py-2 px-24 rounded-lg flex flex-row items-center gap-x-2"
					onClick={() => setConfirmPopup(true)}>
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
