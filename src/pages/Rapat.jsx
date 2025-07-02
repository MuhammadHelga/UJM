import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CardRapat from '../components/CardRapat'

function Rapat() {
  const [rapatList, setRapatList] = useState([]);
  const [error, setError] = useState(null);
  const { detailId } = useParams();

  useEffect(() => {
    const fetchRapat = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/rapat', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.data.api_status === 1) {
          // setRapatList(res.data.data);
          const allData = res.data.data;
          const filtered = allData.filter(item => String(item.unit_prokerjsi_id) === String(detailId));
          setRapatList(filtered);
        } else {
          setError(res.data.api_message || 'Gagal mengambil data rapat.');
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchRapat();
  }, []);

  return (
    <div className="w-full h-screen overflow-y-auto px-4">
      <header className="flex flex-col gap-y-2 py-4 sticky top-0 z-10 bg-white">
        <h1 className="font-bold text-4xl">Rapat</h1>
          <div className=" h-1 bg-greyPrimary my-2 rounded-lg"></div>
      </header>
      <div className="overflow-y-auto flex-1">
        {error && <p className="text-red-600">{error}</p>}
        {rapatList.length > 0 ? (
          rapatList.map((item) => (
            <CardRapat key={item.id} data={item}/>
          ))
        ) : (
            <p className='text-center'>tidak data rapat</p>
        )}
      </div>
    </div>
  )
}

export default Rapat
