import React from 'react'
import { useNavigate } from 'react-router-dom';

function CardRapat({data}) {
	function cleanAgenda(html) {
		if (!html) return "Tidak ada deskripsi agenda";
		const textarea = document.createElement("textarea");
		textarea.innerHTML = html;
		const decoded = textarea.value;
		const noTags = decoded.replace(/<[^>]*>/g, "");
		const noExtraSpaces = noTags
			.replace(/\u00A0/g, " ")
			.replace(/\s+/g, " ")
			.trim();
		return noExtraSpaces || "null";
	}

	function cleanNotelen(html) {
		if (!html) return "Tidak ada deskripsi notulen";
		const textarea = document.createElement("textarea");
		textarea.innerHTML = html;
		const decoded = textarea.value;
		const noTags = decoded.replace(/<[^>]*>/g, "");
		const noExtraSpaces = noTags
			.replace(/\u00A0/g, " ")
			.replace(/\s+/g, " ")
			.trim();
		return noExtraSpaces || "null";
	}

	const navigate = useNavigate();

	return (
		<div className="bg-white rounded-xl shadow-md overflow-hidden mb-4 hover:shadow-lg">
			<div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
				<span className="text-lg font-semibold text-indigo-800 bg-indigo-100 px-4 py-1 rounded-full">
					{data.unit}
				</span>
				<span className="text-lg text-white font-semibold px-4 py-1 rounded-full bg-red-500">
					{data.status}
				</span>
			</div>

			<div className="p-4">
				<h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
					{data.judul_rapat}
				</h3>

				<div className="flex items-center text-gray-500 text-md mb-2">
					<span>Tanggal: {data.tanggal}</span>
				</div>

				<div className="flex items-center text-gray-500 text-md mb-3">
					<span>Jam: {data.waktu}</span>
				</div>

				<div className="flex items-center mb-3 text-lg">
					<p>Tempat: {data.tempat}</p>
				</div>

				<div className="text-lg text-gray-600 mb-3 text-justify">
					<p>{cleanAgenda(data.agenda)}</p>
				</div>

				<div className="text-lg bg-gray-50 border border-slate-400 text-gray-600 mb-3 px-3">
					<p>{cleanNotelen(data.notulen)}</p>
				</div>

				<div className="flex justify-between items-center pt-3 border-t border-gray-200">
					<div className="flex space-x-2">
						<button
							onClick={() => {
								if (data.file_pendukung)
									window.open(data.file_pendukung, "_blank");
							}}
							disabled={!data.file_pendukung}
							className={`px-4 py-2 rounded transition text-white
                ${
									data.file_pendukung
										? "bg-blue-600 hover:bg-blue-700 cursor-pointer"
										: "bg-gray-400 cursor-not-allowed"
								}`}
						>
							{data.file_pendukung
								? "File Pendukung"
								: "Tidak Ada File Pendukung"}
						</button>
						<button
							onClick={() => {
								if (data.file_tambahan)
									window.open(data.file_tambahan, "_blank");
							}}
							disabled={!data.file_tambahan}
							className={`px-4 py-2 rounded transition 
                ${
									data.file_tambahan
										? "text-purple-600 bg-purple-50 hover:bg-purple-600 hover:text-purple-50 cursor-pointer"
										: "bg-gray-400 text-white cursor-not-allowed"
								}`}
						>
							{data.file_tambahan ? "File Tambahan" : "Tidak Ada File Tambahan"}
						</button>
						<button 
							className='text-white bg-stone-700 px-4 py-2 rounded'
							onClick={() => navigate(`/Peserta`)}
						>
							Peserta Rapat
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CardRapat
