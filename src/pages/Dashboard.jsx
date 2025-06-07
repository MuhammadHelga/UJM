import React, { useState } from "react";
import CircleChart from "../components/CircleChart";
import axios from "axios";
import { useEffect } from "react";

const Dashboard = () => {
	const [DashboardStatus, setDashboardStatus] = useState([]);

	const fetchStatusData = async () => {
		try {
			const token = localStorage.getItem("token");
			console.log("Token: ", token);

			const res = await axios.get("/skripsi_dashboard_status_proker_count", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			console.log("Data Api: ", res.data);
			if (res.data.api_status === 1) {
				setDashboardStatus(res.data.data);
			} else {
				setError(res.data.api_message);
			}
		} catch (err) {
			setError(err.message);
			console.error("Error fetching data:", err);
		}
	};

	useEffect(() => {
		fetchStatusData();
	}, []);
	const statusData = DashboardStatus.map((item) => {
		// Tentukan warna dan stroke berdasarkan status, bisa kamu sesuaikan
		let bg = "bg-blueLight";
		let stroke = "#888888";

		switch (item.status) {
			case "Berjalan":
				stroke = "#FF8900";
				break;
			case "Terlaksana":
				stroke = "#6BDE6F";
				break;
			case "Dibatalkan":
				stroke = "#EE4D00";
				break;
			case "Terencana":
				stroke = "#213854";
				break;
			default:
				break;
		}

		return {
			label: item.status,
			value: parseFloat(item.percent), // ubah string persen jadi number
			bg,
			stroke,
		};
	});

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
						Status Proker & Rencana Program
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
						<CircleChart percentage={item.value} strokeColor={item.stroke} />
						<p className="mt-4 font-bold text-3xl">{item.label}</p>
					</div>
				))}
			</section>
		</>
	);
};

export default Dashboard;
