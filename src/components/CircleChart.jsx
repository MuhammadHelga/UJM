import React, { useEffect, useState } from "react";

const CircleChart = ({ percentage, strokeColor }) => {
	const [animatedPercent, setAnimatedPercent] = useState(0);

	useEffect(() => {
		let current = 0;
		const interval = setInterval(() => {
			current += 1;
			if (current > percentage) {
				clearInterval(interval);
			} else {
				setAnimatedPercent(current);
			}
		}, 10);
		return () => clearInterval(interval);
	}, [percentage]);

	const radius = 75;
	const stroke = 20;
	const normalizedRadius = radius - stroke / 2;
	const circumference = 2 * Math.PI * normalizedRadius;
	const strokeDashoffset =
		circumference - (animatedPercent / 100) * circumference;

	return (
		<svg width={radius * 2} height={radius * 2}>
			<circle
				stroke="#e5e7eb"
				fill="transparent"
				strokeWidth={stroke}
				r={normalizedRadius}
				cx={radius}
				cy={radius}
			/>
			<circle
				stroke={strokeColor}
				fill="transparent"
				strokeWidth={stroke}
				strokeDasharray={circumference}
				strokeDashoffset={strokeDashoffset}
				strokeLinecap="round"
				style={{
					transition: "stroke-dashoffset 0.05s linear",
					transform: "rotate(-90deg)",
					transformOrigin: "50% 50%",
				}}
				r={normalizedRadius}
				cx={radius}
				cy={radius}
			/>
			<text
				x="50%"
				y="50%"
				dominantBaseline="middle"
				textAnchor="middle"
				className="text-xl font-bold"
			>
				{animatedPercent}%
			</text>
		</svg>
	);
};

export default CircleChart