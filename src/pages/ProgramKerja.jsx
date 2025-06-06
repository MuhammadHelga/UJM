import React from 'react'
import Header from '../components/Header';
import CardProker from '../components/CardProker';

const ProgramKerja = () => {

    const listProker = [
        {
            status: "Terlaksana",
            namaProker: "Seminar Internasional",
            PeriodeStart: "2023-01-10",
            PeriodeEnd: "2023-01-15"
        },
        {
            status: "Terlaksana",
            namaProker: "Seminar Internasional",
            PeriodeStart: "2023-01-10",
            PeriodeEnd: "2023-01-15"
        },
        {
            status: "Terlaksana",
            namaProker: "Seminar Internasional",
            PeriodeStart: "2023-01-10",
            PeriodeEnd: "2023-01-15"
        },
        {
            status: "Terlaksana",
            namaProker: "Seminar Internasional",
            PeriodeStart: "2023-01-10",
            PeriodeEnd: "2023-01-15"
        },
        {
            status: "Terlaksana",
            namaProker: "Seminar Internasional",
            PeriodeStart: "2023-01-10",
            PeriodeEnd: "2023-01-15"
        },
        {
            status: "Terlaksana",
            namaProker: "Seminar Internasional",
            PeriodeStart: "2023-01-10",
            PeriodeEnd: "2023-01-15"
        },
    ]

  return (
		<section className="h-screen flex flex-col">
			<section className="h-screen flex flex-col">
				<Header title="Program Kerja" add={true} />
				<div className="px-6 overflow-y-auto grid grid-cols-2 md:grid-cols-1 gap-4 mb-6">
					{listProker.map((prokers, index) => (
						<CardProker status={prokers.status} namaProker={prokers.namaProker}
                        PeriodeStart={prokers.PeriodeStart} PeriodeEnd={prokers.PeriodeEnd}
                         />
					))}
				</div>
			</section>
		</section>
	);
}

export default ProgramKerja