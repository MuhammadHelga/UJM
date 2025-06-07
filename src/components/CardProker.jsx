import React from "react";
import { useNavigate } from "react-router-dom";

const CardProker = ({ item }) => {
	const navigate = useNavigate();
	return (
		<div className="bg-blueLight rounded-xl p-6 flex flex-row justify-between items-center">
			<div className="flex flex-col gap-y-1">
				<span className="bg-bluePrimary text-white text-xs font-bold text-center py-1 rounded max-w-32">
					{item.status}
				</span>
				<h3 className="font-bold text-base capitalize">{item.program}</h3>
				<p className="text-sm">
					Periode {item.start_date} s.d. {item.end_date}
				</p>
			</div>

			<button
				onClick={() =>
					navigate(`/ProgramKerja/${item.unit_rencana_program_id}/${item.id}`)
				}
				className="bg-bluePrimary text-white text-sm font-semibold py-3 px-8 rounded-lg"
			>
				Lihat Detail
			</button>
		</div>
	);
};

export default CardProker;
