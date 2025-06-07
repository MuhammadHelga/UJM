import React from 'react';
import { useNavigate } from 'react-router-dom';

function CardKinerjaUtama({ item }) {
  const navigate = useNavigate();

  return (
    <div className="bg-[#DDF4FF] border p-4 mb-4 rounded-md w-full flex flex-row justify-between items-center">
      <div className="flex flex-col">
        <h3 className="font-semibold">{item.kinerja_utama}</h3>
        <p>Periode: {item.start_periode} s/d {item.end_periode}</p>
      </div>
      <button
        onClick={() => navigate(`/RencanaKinerja/${item.id}`)}
        className="bg-[#2981AA] text-white px-4 py-2 rounded-lg"
      >
        Lihat Detail
      </button>
    </div>
  );
}

export default CardKinerjaUtama;
