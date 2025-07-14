import { useState } from 'react'
import './App.css'
import "@fontsource/poppins";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DetailUser from "./pages/DetailUser"
import KinerjaUtama from "./pages/KinerjaUtama";
import RencanaKinerja from "./pages/RencanaKinerja";
import SideBar from "./components/SideBar";
import RencanaProker from "./pages/RencanaProker";
import Dashboard from "./pages/Dashboard";
import ProgramKerja from "./pages/ProgramKerja";
import DetailProker from "./pages/DetailProker";
import Rapat from './pages/Rapat';
import PesertaRapat from './pages/PesertaRapat';

function App() {
	return (
		<BrowserRouter>
			<AppLayout />
		</BrowserRouter>
	);
}

export default App;

function AppLayout() {
	const location = useLocation();
	const isLoginPage = location.pathname === "/";

	return (
		<div className="flex h-screen overflow-hidden font-poppins">
			{!isLoginPage && <SideBar />}
			<div className="flex-1 bg-white ">
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/Dashboard" element={<Dashboard />} />
					<Route path="/DetailUser" element={<DetailUser />} />
					<Route path="/ProgramKinerja" element={<KinerjaUtama />} />
					<Route path="/RencanaKinerja/:id" element={<RencanaKinerja />} />
					<Route path="/RencanaProgramKerja/:id" element={<RencanaProker />} />
					<Route path="/ProgramKerja/:id" element={<ProgramKerja />} />
					<Route path="/Rapat/:detailId" element={<Rapat />} />
					<Route
						path="/ProgramKerja/:id/:detailId"
						element={<DetailProker />}
					/>
					<Route path="/Peserta" element={<PesertaRapat />}/>
				</Routes>
			</div>
		</div>
	);
}
