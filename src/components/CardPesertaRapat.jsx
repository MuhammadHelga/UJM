import React from 'react'

function CardPesertaRapat({ nama, ttd }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold">{nama}</h2>
      <div className="mt-2">
        <h3 className="text-sm font-medium">Tanda Tangan:</h3>
        <p>{ttd}</p>
      </div>
    </div>
  )
}

export default CardPesertaRapat
