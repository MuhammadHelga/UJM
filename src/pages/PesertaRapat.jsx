import React, { useEffect, useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardPesertaRapat from "../components/CardPesertaRapat";

function PesertaRapat() {
	const { id } = useParams();
	const [dataPeserta, setDataPeserta] = useState([]);
	const [presensiPopup, setPresensiPopup] = useState(false);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [formData, setFormData] = useState({ nama: "" });
	const signatureRef = useRef();

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const clearSignature = () => {
		signatureRef.current.clear();
	};

	const handleSubmit = async () => {
		const token = localStorage.getItem("token");

		if (!formData.nama) {
			alert("Nama wajib diisi");
			return;
		}

		if (signatureRef.current.isEmpty()) {
			alert("Tanda tangan belum diisi");
			return;
		}

		const base64DataUrl = signatureRef.current
			.getCanvas()
			.toDataURL("image/png");

		try {
			const response = await axios.post(
				"/rapatpresensi",
				{
					nama: formData.nama,
					tanda_tangan: base64DataUrl, // kirim data base64 langsung
					notulen_rapat_id: parseInt(id),
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			if (response.data.api_status === 1) {
				alert("Presensi berhasil!");
				setPresensiPopup(false);
				window.location.reload(); // atau fetch ulang
			} else {
				alert("Gagal menyimpan presensi: " + response.data.api_message);
			}
		} catch (err) {
			console.error(err);
			alert("Terjadi kesalahan saat menyimpan presensi.");
		}
	};

	const renderPresensiPopup = () => (
		<div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-xl max-h-[90vh] overflow-y-auto">
				<h2 className="text-2xl font-bold mb-4">Presensi Rapat</h2>

				<h3>Nama</h3>
				<input
					name="nama"
					onChange={handleInputChange}
					className="w-full mb-2 p-2 border rounded"
				/>

				<h3>Tanda Tangan</h3>
				<SignatureCanvas
					ref={signatureRef}
					penColor="black"
					canvasProps={{
						width: 525,
						height: 260,
						className: "border rounded mb-2",
					}}
				/>
				<button
					onClick={clearSignature}
					className="px-4 py-1 mb-2 bg-gray-300 rounded"
				>
					Bersihkan
				</button>

				<div className="flex justify-end gap-x-4 mt-4">
					<button
						onClick={() => setPresensiPopup(false)}
						className="px-4 py-2 bg-gray-300 rounded"
					>
						Batal
					</button>
					<button
						onClick={handleSubmit}
						className="px-4 py-2 bg-greenPrimary text-white rounded"
					>
						Simpan
					</button>
				</div>
			</div>
		</div>
	);

	useEffect(() => {
		const token = localStorage.getItem("token");

		if (!token) {
			setError("Token akses tidak ditemukan. Silakan login ulang.");
			setLoading(false);
			return;
		}

		axios
			.get("/rapatpeserta", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				if (response.data.api_status === 1) {
					const filtered = response.data.data.filter(
						(item) => item.notulen_rapat_id === parseInt(id)
					);
					setDataPeserta(filtered);
				} else {
					setError(response.data.api_message || "Gagal memuat data peserta");
				}
			})
			.catch((err) => {
				console.error("Error API:", err);
				setError("Terjadi kesalahan saat mengambil data peserta");
			})
			.finally(() => {
				setLoading(false);
			});
	}, [id]);

	return (
		<div className="flex flex-col h-screen px-4 overflow-hidden">
			<header className="flex flex-col gap-y-2 py-4 sticky top-0 z-10 bg-white">
				<div className="flex flex-row justify-between">
					<h1 className="font-bold text-4xl">Peserta Rapat</h1>
					<button
						className="text-white bg-blueDarker px-12 py-2 rounded-lg"
						onClick={() => setPresensiPopup(true)}
					>
						Presensi
					</button>
				</div>
				<div className="h-1 bg-greyPrimary my-2 rounded-lg"></div>
			</header>

			<div className="flex-1 overflow-y-auto">
				{loading ? (
					<p className="text-gray-500">Loading data peserta...</p>
				) : error ? (
					<p className="text-red-600">{error}</p>
				) : dataPeserta.length === 0 ? (
					<p className="text-gray-500">Tidak ada peserta untuk notulen ini.</p>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
						{dataPeserta.map((peserta) => (
							<CardPesertaRapat
								key={peserta.id}
								nama={peserta.nama}
								ttd={peserta.tanda_tangan}
							/>
						))}
					</div>
				)}
			</div>

			{presensiPopup && renderPresensiPopup()}
		</div>
	);
}

export default PesertaRapat;
