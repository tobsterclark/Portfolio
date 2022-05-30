module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Lekton", "sans-serif"],
			masthead: ["Varela Round", "sans-serif"],
		},
		extend: {
			transitionDuration: {
				0: "0ms",
				1500: "1500ms",
				2000: "2000ms",
			},
			animation: {
				pingOnce: "ping 0.2s cubic-bezier(0, 0, 0.2, 0.5)",
				blink: "blink 0.8s linear infinite",
				sliderightin: "sliderightin 0.5s forwards",
				together: "together 0.5s forwards",
				fadeIn: "fadeIn 2s forwards",
			},
			keyframes: {
				fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 100 } },
				sliderightin: { "100%": { right: 0 } },
				blink: {
					"50%": { opacity: 0 },
					to: { opacity: 100 },
				},
				together: { "100%": { bottom: 1 } },
			},
		},
	},
	plugins: [],
};
