import { useState } from 'react'
import './App.css'
import "@fontsource/poppins";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import KinerjaUtama from "./pages/KinerjaUtama";
import RencanaKinerja from "./pages/RencanaKinerja";
import SideBar from "./components/SideBar";
import RencanaProker from "./pages/RencanaProker";
import Dashboard from "./pages/Dashboard";
import ProgramKerja from "./pages/ProgramKerja";
import DetailProker from "./pages/DetailProker";

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
					<Route path="/ProgramKinerja" element={<KinerjaUtama />} />
					<Route path="/RencanaKinerja/:id" element={<RencanaKinerja />} />
					<Route path="/RencanaProgramKerja" element={<RencanaProker />} />
					<Route path="/ProgramKerja" element={<ProgramKerja />} />
					<Route path="/DetailProgramKerja" element={<DetailProker />} />
				</Routes>
			</div>
		</div>
	);
}
