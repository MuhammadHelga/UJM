/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
			colors: {
				bluePrimary: "#2981AA",
				blueDarker: "#213854",
				blueLight: "#DDF4FF",
				greyPrimary: "#A6A6A6",
				greenPrimary: "#6BDE6F",
				orangePrimary: "#FF8900",
				redPrimary: "#EE4D00",
				whitePrimary: "#ffffff",
			},
		},
	},
	plugins: [],
};
