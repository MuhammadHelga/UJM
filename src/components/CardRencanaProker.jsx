	import React from 'react'
import { useNavigate } from 'react-router-dom';

	const CardRencanaProker = ({namaProker, unitId, target, tercapai, satuan}) => {
		const navigate = useNavigate();
	return (
		<div className="p-6 flex flex-col bg-blueLight border border-black rounded-lg">
			<div className="relative flex flex-row justify-between items-center">
				<h3 className="font-semibold text-lg">Rencana Kerja : {namaProker}</h3>
				<button
					onClick={() => navigate('/ProgramKerja')}
					className="bg-bluePrimary px-4 py-2 rounded-lg text-white font-bold text-sm"
				>
					Lihat Detail
				</button>
			</div>
			<div className="w-full h-[2px] bg-black my-2 rounded-lg"></div>
			<div className="py-4 ">
				<dl className="grid grid-cols-[auto_auto_1fr] gap-x-8 gap-y-4 text-md">
					<dt className="font-semibold">Unit Rencana Kinerja ID</dt>
					<dd className="whitespace-nowrap">:</dd>
					<dd>{unitId}</dd>

					<dt className="font-semibold">Target</dt>
					<dd>:</dd>
					<dd>{target}</dd>

					<dt className="font-semibold">Tercapai</dt>
					<dd>:</dd>
					<dd>{tercapai}</dd>

					<dt className="font-semibold">Satuan</dt>
					<dd>:</dd>
					<dd>{satuan}</dd>
				</dl>
			</div>
		</div>
	);
	}

	export default CardRencanaProker