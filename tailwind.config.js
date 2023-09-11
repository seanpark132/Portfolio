/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			spacing: {
				"15/16": "93.75%",
			},
			colors: {
				"color-1": "#352F44",
				"color-2": "#5C5470",
				"color-3": "#B9B4C7",
				"color-4": "#FAF0E6",
			},
		},
	},
	plugins: [],
};
