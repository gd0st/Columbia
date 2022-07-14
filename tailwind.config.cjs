/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
	'./src/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
	},
	colors: {
		'purple': colors.purple,

		'social': {
			'discord': '#7289DA',
			'instagram': '#EA0C5F',
			'linkedin': '#0077B5',
			'twitter': '#00ACEE'
		}
	}
  },
  plugins: [],
}
