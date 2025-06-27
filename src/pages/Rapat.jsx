import React from 'react'
import CardRapat from '../components/CardRapat'

function Rapat() {
  return (
    <div className="h-screen overflow-y-auto">
      <header className="flex flex-col gap-y-2 p-6 sticky top-0 z-10 bg-white shadow-sm">
        <h1 className="font-bold text-4xl">Rapat</h1>
        <div className="flex flex-col">
          <div className="w-full h-1 bg-greyPrimary my-2 rounded-lg"></div>
        </div>
      </header>
      <div className="overflow-y-auto flex-1 px-7">
            <CardRapat/>
      </div>
    </div>
  )
}

export default Rapat
