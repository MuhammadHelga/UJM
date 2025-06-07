import React from 'react'

const CardListDetail = ({ item }) => {
	if (!item) {
		return (
			<section className="px-6 py-6">
				<p className="text-center text-gray-500">Data tidak tersedia</p>
			</section>
		);
	}

	const details = [
		{ title: "Ketua", value: item.ketua },
		{
			title: "Dana",
			value: item.dana ? `Rp ${item.dana.toLocaleString("id-ID")}` : "-",
		},
		{ title: "Start Date", value: item.start_date },
		{ title: "End Date", value: item.end_date },
		{ title: "Tempat", value: item.tempat },
		{ title: "Realisasi", value: item.realisasi },
		{ title: "Tahun", value: item.tahun },
		{ title: "Bulan", value: item.bulan },
		{ title: "Deskripsi", value: item.deskripsi },
	];
	return (
		<section className="px-6 grid grid-cols-2 gap-x-12 gap-y-6 pb-6">
			{details.map((detail, index) => (
				<div
					key={index}
					className={detail.title === "Deskripsi" ? "col-span-2" : ""}
				>
					<div className="flex flex-col py-8 px-6 bg-blueLight rounded-xl mb-4 flex-1">
						<h3 className="font-bold text-xl">{detail.title}</h3>
						<p className="text-lg">{detail.value}</p>
					</div>
				</div>
			))}
		</section>
	);
};

export default CardListDetail