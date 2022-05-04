module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Lekton", "sans-serif"],
			masthead: ["Varela Round", "sans-serif"],
		},
		extend: {
			animation: {
				blink: "blink 1s ease-in-out infinite",
			},
			keyframes: {
				blink: {
					"50%": { opacity: 0 },
				},
			},
		},
	},
	plugins: [],
};
