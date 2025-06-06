import React from "react";
import { useNavigate } from "react-router-dom";

const CardProker = ({status, namaProker, PeriodeStart, PeriodeEnd}) => {
	const navigate = useNavigate()
	return (
		<div className="bg-blueLight rounded-xl p-6 flex flex-row justify-between items-center">
			<div className="flex flex-col gap-y-1">
				<span className="bg-bluePrimary text-white text-xs font-bold text-center py-1 rounded max-w-32">
					{status}
				</span>
				<h3 className="font-bold text-base capitalize">{namaProker}</h3>
				<p className="text-sm">
					Periode {PeriodeStart} s.d. {PeriodeEnd}
				</p>
			</div>

			<button
				onClick={() => navigate("/DetailProgramKerja")}
				className="bg-bluePrimary text-white text-sm font-semibold py-3 px-8 rounded-lg"
			>
				Lihat Detail
			</button>
		</div>
	);
};

export default CardProker;
