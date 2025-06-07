import React from 'react'
import Header from '../components/Header'
import CardRencanaProker from '../components/CardRencanaProker';

const RencanaProker = () => {

    const dataProker = [
			{
				namaProker: "Membimbing mahasiswa Praktik Kerja Lapangan",
				unitId: "3",
				target: 1,
				tercapai: 1,
				satuan: "Mahasiswa",
			},
			{
				namaProker: "Membimbing mahasiswa Praktik Kerja Lapangan",
				unitId: "3",
				target: 1,
				tercapai: 1,
				satuan: "Mahasiswa",
			},
			{
				namaProker: "Membimbing mahasiswa Praktik Kerja Lapangan",
				unitId: "3",
				target: 1,
				tercapai: 1,
				satuan: "Mahasiswa",
			},
			{
				namaProker: "Membimbing mahasiswa Praktik Kerja Lapangan",
				unitId: "3",
				target: 1,
				tercapai: 1,
				satuan: "Mahasiswa",
			},
			{
				namaProker: "Membimbing mahasiswa Praktik Kerja Lapangan",
				unitId: "3",
				target: 1,
				tercapai: 1,
				satuan: "Mahasiswa",
			},
		];
  return (
		<section className="h-screen flex flex-col">
			<Header title="Rencana Program Kerja" />
			<div className="px-6 overflow-y-auto grid grid-cols-2 md:grid-cols-1 gap-6 mb-6">
				{dataProker.map((proker, index) => (
					<CardRencanaProker
						namaProker={proker.namaProker}
						satuan={proker.satuan}
						target={proker.target}
						unitId={proker.unitId}
						tercapai={proker.tercapai}
					/>
				))}
			</div>
		</section>
	);
}

export default RencanaProker