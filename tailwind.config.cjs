/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["./src/**/*.{astro,html}"],
	theme: {
		extend: {
			lineHeight: {
				14: "3.5rem",
			},
		}
	},
	plugins: [
		require("daisyui")
	],
	daisyui: {
		themes: ["halloween"]
	}
}
