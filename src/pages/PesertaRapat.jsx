import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CardPesertaRapat from '../components/CardPesertaRapat'

function PesertaRapat() {
  const { id } = useParams();
  const [dataPeserta, setDataPeserta] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      setError('Token akses tidak ditemukan. Silakan login ulang.');
      setLoading(false);
      return;
    }

    axios
      .get('/rapatpeserta', {
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
          setError(response.data.api_message || 'Gagal memuat data peserta');
        }
      })
      .catch((err) => {
        console.error('Error API:', err);
        setError('Terjadi kesalahan saat mengambil data peserta');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);


  return (
    <div className="flex flex-col h-screen px-4 overflow-hidden">
      <header className="flex flex-col gap-y-2 py-4 sticky top-0 z-10 bg-white">
        <h1 className="font-bold text-4xl">Peserta Rapat</h1>
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
    </div>
  )
}

export default PesertaRapat
