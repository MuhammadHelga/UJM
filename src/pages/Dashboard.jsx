import React from 'react'
import CircleChart from '../components/CircleChart';

function Dashboard() {
  const statusData = [
		{
			label: "Terlaksana",
			value: 75,
			bg: "bg-greenPrimary",
			stroke: "#22c55e",
		},
		{
			label: "Sedang Berjalan",
			value: 50,
			bg: "bg-orangePrimary",
			stroke: "#eab308",
		},
		{ label: "Terencana", value: 30, bg: "bg-blueDarker", stroke: "#3b82f6" },
		{ label: "Dibatalkan", value: 10, bg: "bg-redPrimary", stroke: "#ef4444" },
	];
  

  const today = new Date().toLocaleDateString("id-ID", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
  return (
		<>
			<header className="flex flex-col gap-y-2 p-6 sticky top-0 z-10 bg-white shadow-sm">
				<div className="flex flex-row justify-between items-center">
					<h1 className="font-bold text-4xl">DashBoard</h1>
					<span className="bg-blueDarker text-white px-12 py-2 rounded-lg">
						{today}
					</span>
				</div>
				<div className="flex flex-row justify-between items-center">
					<h2 className="text-xl font-medium">
						Status Proker & Rencana Progream
					</h2>
				</div>
				<div className="w-full h-1 bg-greyPrimary my-2 rounded-lg"></div>
			</header>
			<section className="p-6 grid grid-cols-2 gap-6">
				{statusData.map((item, index) => (
					<div
						key={index}
						className={`flex flex-col items-center justify-center ${item.bg} p-6 rounded-lg shadow`}
					>
						<CircleChart percentage={item.value} strokeColor={item.stroke}/>
						<p className="mt-4 font-bold text-xl text-white">{item.label}</p>
					</div>
				))}
			</section>
		</>
	);
}

export default Dashboard
