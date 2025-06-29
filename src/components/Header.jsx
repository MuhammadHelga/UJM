import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";

const Header = ({title, add, onAdd, searchTerm, setSearchTerm}) => {
	const today = new Date().toLocaleDateString("id-ID", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
	
	return (
		<section className="flex flex-col gap-y-4 p-6 sticky top-0 z-10 bg-white">
			<div className="flex flex-row justify-between items-center">
				<div className="flex flex-1 max-h-12 gap-x-4">
					<input
						type="text"
						placeholder='Cari...'
						value={searchTerm}
            			onChange={(e) => setSearchTerm(e.target.value)} 
						className="border border-black rounded-lg px-3 py-2 w-[85%]"
					/>
					<button className="rounded-lg px-4 py-2 bg-blueDarker text-white">
						<FaSearch />
					</button>
				</div>
				<span className="bg-blueDarker text-white px-12 py-2 rounded-lg">
					{today}
				</span>
			</div>

			<h1 className="font-bold text-4xl">{title}</h1>

			<div className="flex flex-col">
				<div className="flex flex-row justify-between items-center">
					{add && (
						<button className="bg-greenPrimary text-white font-semibold py-2 px-6 rounded-lg flex flex-row items-center gap-x-2"
						onClick={onAdd}>
							<IoAddOutline size="1.5em" /> Tambah Rencana Kerja
						</button>
					)}
				</div>
				<div className="w-full h-1 bg-greyPrimary my-2 rounded-lg"></div>
			</div>
		</section>
	);
};

export default Header;
