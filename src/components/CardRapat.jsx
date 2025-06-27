import React from 'react'

function CardRapat({data}) {
  return (
  <div className="max-w-screen-2xl bg-white rounded-xl shadow-md overflow-hidden mb-4 hover:shadow-lg">
    <div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
      <span className="text-lg font-semibold text-indigo-800 bg-indigo-100 px-4 py-1 rounded-full">
        {data.unit}
      </span>
      <span className='text-lg text-white font-semibold px-4 py-1 rounded-full bg-red-500'>
        {data.status}
      </span>
    </div>
    
    <div className="p-4">
      <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
        {data.judul_rapat}
      </h3>

      <div className="flex items-center text-gray-500 text-md mb-2">
        <span>Tanggal: {data.tanggal}</span>
      </div>
      
      <div className="flex items-center text-gray-500 text-md mb-3">
        <span>Jam: {data.waktu}</span>
      </div>
      
      <div className="flex items-center mb-3 text-lg">
        <p>Tempat: {data.tempat}</p>
      </div>
      
      <div className="text-lg text-gray-600 mb-3">
        <p>{data.agenda}</p>
      </div>

      <div className="text-lg bg-gray-50 border border-slate-400 text-gray-600 mb-3 px-3 line-clamp-2">
        <p>{data.notulen ?? 'null'}</p>
      </div>
      
      <div className="flex justify-between items-center pt-3 border-t border-gray-200">
        <div className="flex space-x-2">
            <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full flex items-center">
              <i className="mr-1"></i>
              File Pendukung: {data.file_pendukung ?? 'null'}
            </span>
          
            <span className="text-xs bg-purple-50 text-purple-600 px-2 py-1 rounded-full flex items-center">
              <i className=" mr-1"></i>
              File Tambahan: {data.file_tambahan ?? 'null'}
            </span>
        </div>
      </div>
    </div>
  </div>
);

}

export default CardRapat
