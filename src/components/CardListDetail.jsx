import React from 'react'

const CardListDetail = ({title, value}) => {
  return (
		<div className="flex flex-col p-4 bg-blueLight rounded-xl mb-4 flex-1">
			<h3 className="font-bold text-lg">{title}</h3>
			<p className="text-sm">{value}</p>
		</div>
	);
}

export default CardListDetail