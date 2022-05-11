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
				sliderightin: "sliderightin 0.5s forwards",
				sliderightout: "sliderightout 0.5s forwards",
				together: "together 0.5s forwards",
			},
			keyframes: {
				sliderightin: { "100%": { right: 0 } },
				sliderightout: { "100%": { right: "-15rem" } },
				blink: {
					"50%": { opacity: 0 },
				},
				together: { "100%": { bottom: 1 } },
			},
		},
	},
	plugins: [],
};
