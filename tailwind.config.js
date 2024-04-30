/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Varela Round", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["bumblebee", "forest"],
	},
};
