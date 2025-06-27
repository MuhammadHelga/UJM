import React, { useEffect, useState } from "react";
import CardListDetail from "../components/CardListDetail";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditPopup = ({ editItem, onChange, onClose, onSubmit }) => (
	<div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
		<div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-xl max-h-[90vh] overflow-y-auto">
			<h2 className="text-2xl font-bold mb-4">Edit Program Kerja</h2>

			{[
				{ label: "Nama Program Kerja", name: "program", type: "text" },
				{ label: "Tempat", name: "tempat", type: "text" },
				{ label: "Dana", name: "dana", type: "number" },
				{ label: "Realisasi", name: "realisasi", type: "text" },
				{ label: "Tanggal Mulai", name: "start_date", type: "date" },
				{ label: "Tanggal Selesai", name: "end_date", type: "date" },
				{ label: "Tahun", name: "tahun", type: "text" },
				{ label: "Bulan", name: "bulan", type: "text" },
				{ label: "Ketua", name: "ketua", type: "text" },
			].map(({ label, name, type }) => (
				<div key={name}>
					<h3>{label}</h3>
					<input
						type={type}
						name={name}
						placeholder={label}
						value={editItem[name] ?? ""}
						onChange={onChange}
						className="w-full mb-2 p-2 border rounded"
					/>
				</div>
			))}

			<h3>Status</h3>
			<select
				name="status"
				value={editItem.status ?? ""}
				onChange={onChange}
				className="w-full mb-2 p-2 border rounded"
			>
				<option value="Terencana">Terencana</option>
				<option value="Berjalan">Berjalan</option>
				<option value="Terlaksana">Terlaksana</option>
				<option value="Dibatalkan">Dibatalkan</option>
			</select>

			<h3>Deskripsi</h3>
			<textarea
				name="deskripsi"
				value={editItem.deskripsi ?? ""}
				onChange={onChange}
				className="w-full mb-2 p-2 border rounded"
			/>

			<div className="flex justify-end gap-x-4 mt-4">
				<button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
					Batal
				</button>
				<button
					onClick={onSubmit}
					className="px-4 py-2 bg-orangePrimary text-white rounded"
				>
					Simpan
				</button>
			</div>
		</div>
	</div>
);

const DetailProker = () => {
  const navigate = useNavigate();
  const [editPopup, setEditPopup] = useState(false);
  const [confirmDelete, setConfirmPopup] = useState(false);
  const [DetailProkerData, setDetailProkerData] = useState([]);
  const [editItem, setEditItem] = useState({
    program: "",
    tempat: "",
    dana: "",
    realisasi: "",
    start_date: "",
    end_date: "",
    status: "",
    deskripsi: "",
    tahun: "",
    bulan: "",
    ketua: "",
  });
  const [error, setError] = useState(null);

  const { id, detailId } = useParams();

  useEffect(() => {
    const fetchProkerData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("/skripsi_program_kerja", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: { unit_rencana_program_id: id },
        });
        if (res.data.api_status === 1) {
          setDetailProkerData(res.data.data);
        } else {
          setError(res.data.api_message);
        }
      } catch (err) {
        setError(err.message);
      }
    };
    fetchProkerData();
  }, [id]);

  const foundData = Array.isArray(DetailProkerData)
    ? DetailProkerData.find((item) => String(item.id) === String(detailId))
    : null;

  useEffect(() => {
  	if (foundData) {
  		setEditItem({
  			program: foundData.program || "",
  			tempat: foundData.tempat || "",
  			dana: foundData.dana || "",
  			realisasi: foundData.realisasi || "",
  			start_date: foundData.start_date || "",
  			end_date: foundData.end_date || "",
  			status: foundData.status || "",
  			deskripsi: foundData.deskripsi || "",
  			tahun: foundData.tahun || "",
  			bulan: foundData.bulan || "",
  			ketua: foundData.ketua || "",
  		});
  	}
  }, [foundData]);

  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setEditItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "/skripsi_program_kerja_update",
        {
          id: detailId,
          unit_rencana_program_id: id,
          ...editItem,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.api_status === 1) {
        alert("Program kerja berhasil diupdate!");
        setEditPopup(false);
        window.location.reload();
      } else {
        alert(res.data.api_message);
      }
    } catch (err) {
      console.error("Error updating:", err);
      alert("Gagal memperbarui data.");
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("/skripsi_program_kerja_delete", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: { id: detailId },
      });
      if (res.data.api_status === 1) {
        alert("Program kerja berhasil dihapus!");
        setConfirmPopup(false);
        navigate(`/ProgramKerja/${id}`);
      }
    } catch (error) {
      alert("Gagal menghapus program kerja.");
    }
  };

  

  const ConfirmDelete = () => (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
        <h2 className="text-xl font-semibold mb-4">
          Ingin menghapus Program Kerja?
        </h2>
        <div className="flex justify-end gap-x-4">
          <button
            onClick={() => setConfirmPopup(false)}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Batal
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-redPrimary text-white rounded"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-screen overflow-y-auto">
      <header className="flex flex-col gap-y-2 p-6 sticky top-0 z-10 bg-white">
        <h1 className="font-bold text-4xl">Program Kerja</h1>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-xl font-medium">
              {foundData ? foundData.program : "Loading..."}
            </h2>
            <div
              className={`text-white font-semibold py-2 px-24 rounded-lg flex flex-row items-center gap-x-2 ${
                foundData?.status === "Terencana"
                  ? "bg-[#213854]"
                  : foundData?.status === "Berjalan"
                  ? "bg-[#FF8900]"
                  : foundData?.status === "Terlaksana"
                  ? "bg-[#6BDE6F]"
                  : foundData?.status === "Dibatalkan"
                  ? "bg-[#EE4D00]"
                  : "bg-gray-400"
              }`}
            >
              {foundData ? foundData.status : "Loading..."}
            </div>
          </div>
          <div className="w-full h-1 bg-greyPrimary my-2 rounded-lg"></div>
        </div>
      </header>

      {foundData ? (
        <CardListDetail item={foundData} key={foundData.id} />
      ) : (
        <p className="text-center py-4">Tidak ada data yang ditemukan</p>
      )}

      <section className="px-6 mt-12 pb-6">
        <div className="w-full h-1 bg-greyPrimary my-2 rounded-lg"></div>
        <div className="flex gap-x-8 py-2">
          <button
            className="bg-orangePrimary text-white font-bold text-lg py-2 px-24 rounded-lg flex flex-row items-center gap-x-2"
            onClick={() => setEditPopup(true)}
          >
            <FaPencilAlt /> Edit
          </button>
          <button
            className="bg-redPrimary text-white font-bold text-lg py-2 px-24 rounded-lg flex flex-row items-center gap-x-2"
            onClick={() => setConfirmPopup(true)}
          >
            <FaTrash /> Delete
          </button>
          <button
            className="bg-[#213854] text-white font-bold text-lg py-2 px-24 rounded-lg flex flex-row items-center gap-x-2"
            onClick={() => navigate("/Rapat")}
          >
            <GoChecklist /> Notulensi Rapat
          </button>
        </div>
        <div className="w-full h-1 bg-greyPrimary my-2 rounded-lg"></div>
      </section>

      {editPopup && (
        <EditPopup
          editItem={editItem}
          onChange={handleChangeEdit}
          onClose={() => setEditPopup(false)}
          onSubmit={handleEditSubmit}
        />
      )}
      {confirmDelete && <ConfirmDelete />}
    </div>
  );
};



export default DetailProker;
