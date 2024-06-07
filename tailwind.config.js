/** @type {import('tailwindcss').Config} */
export default {
	content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./app.vue", "./error.vue"],
	theme: {
		extend: {
			colors: {
				"dull-lavender": {
					50: "#f6f3ff",
					100: "#eee9fe",
					200: "#e0d6fe",
					300: "#c7b5fd",
					400: "#a78bfa",
					500: "#835cf6",
					600: "#673aed",
					700: "#5528d9",
					800: "#4721b6",
					900: "#3b1d95",
					950: "#251065",
				},
			},
		},
	},
	plugins: [],
};
