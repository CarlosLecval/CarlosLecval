import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'blue': "#80C4E9",
			'offwhite': "#FFF6E9",
			'green': '#BFE4BE',
			'orange': "#FF7F3E",
			'lightorange': "#FF9F6E",
			'darkorange': "#D26833",
			'black': "#000000",
			'white': "#FFFFFF",
			'textgray': "#374151",
			'gray': "#D9D9D9"
		},
		extend: {
			fontFamily: {
				sans: ['Outfit Variable', ...defaultTheme.fontFamily.sans],
			},
			backgroundImage: {
				'mountain': "url('/mountain.svg')",
				'mountain2': "url('/mountain2.svg')",
				'cloud': "url('/cloud.svg')",
				'cloud2': "url('/cloud2.svg')",
				'cloud3': "url('/cloud3.svg')",
			},
			aspectRatio: {
				'3/2': '3 / 2',
			},
			boxShadow: {
				'inner-2': 'inset 2px 4px 5px 0px rgba(0,0,0,0.30)'
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
