import React from 'react'
import CardPesertaRapat from '../components/CardPesertaRapat'

function PesertaRapat() {
  const dataPeserta = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    nama: `Peserta ${i + 1}`,
    ttd: `TTD ${i + 1}`,
  }))

  return (
    <div className='px-4'>
      <header className="flex flex-col gap-y-2 py-4 sticky top-0 z-10 bg-white">
            <h1 className="font-bold text-4xl">Peserta Rapat</h1>
            <div className=" h-1 bg-greyPrimary my-2 rounded-lg"></div>
        </header>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {dataPeserta.map((peserta) => (
          <CardPesertaRapat
          key={peserta.id}
          nama={peserta.nama}
          ttd={peserta.ttd}
          />
        ))}
    </div>
        </div>
  )
}

export default PesertaRapat
