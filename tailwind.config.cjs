/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["./src/**/*.{astro,html}"],
	theme: {
		extend: {}
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("daisyui")
	],
	daisyui: {
		themes: ["dark"]
	}
}
