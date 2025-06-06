import React from "react";
import CardListDetail from "../components/CardListDetail";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const DetailProker = () => {
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
					<button className="bg-orangePrimary text-white font-bold text-lg py-2 px-24 rounded-lg flex flex-row items-center gap-x-2">
						<FaPencilAlt /> Edit
					</button>
					<button className="bg-redPrimary text-white font-bold text-lg py-2 px-24 rounded-lg flex flex-row items-center gap-x-2">
						<FaTrash /> Delete
					</button>
				</div>
				<div className="w-full h-1 bg-greyPrimary my-2 rounded-lg"></div>
			</section>
		</div>
	);
};

export default DetailProker;
