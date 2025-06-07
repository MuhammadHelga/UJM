import React from 'react';
import { useNavigate } from 'react-router-dom';

function CardRencanaKinerja({ item }) {
  const navigate = useNavigate();

  return (
		<section className="bg-[#DDF4FF] border border-black rounded-lg mb-4 p-4 text-lg text-gray-900">
			<header className="flex justify-between items-start mb-3">
				<h3 className="font-semibold">
					Rencana Kerja : {item.rencana_kinerja}
				</h3>
				<button
					onClick={() => navigate(`/RencanaProgramKerja/${item.id}`)}
					type="button"
					className="bg-bluePrimary px-4 py-2 rounded-lg text-white font-bold text-sm"
				>
					Lihat Detail
				</button>
			</header>
			<div className="w-full h-[1px] bg-black my-2 rounded-lg mb-3"></div>
			<dl className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-1 text-lg">
				<dt className="font-semibold">Unit Kinerja Utama ID</dt>
				<dd className="whitespace-nowrap">: {item.unit_kinerja_utama_id}</dd>

				<dt className="font-semibold">Indikator</dt>
				<dd>: {item.indikator}</dd>

				<dt className="font-semibold">Target Indikator</dt>
				<dd className="whitespace-nowrap">: {item.target_indikator}</dd>

				<dt className="font-semibold">Satuan</dt>
				<dd className="whitespace-nowrap">: {item.satuan}</dd>
			</dl>
		</section>
	);
}

export default CardRencanaKinerja;
