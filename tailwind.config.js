/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			center: true,
			padding: '16px',
		},
		screens: {
			xs: '374px',
			sm: '600px',
			md: '768px',
			lg: '992px',
			xl: '1232px',
		},
		extend: {
			colors: {
				primary: {
					50: '#EFF2FE',
					100: '#E1E8FE',
					200: '#CAD4FB',
					300: '#A9B7F8',
					400: '#8791F2',
					500: '#6A6CEA',
					600: '#4E46DC',
					700: '#493FC3',
					800: '#3C359E',
					900: '#35327D',
					950: '#201D49',
				},
				greyscale: {
					10: '#F6F8FA',
					50: '#FAFAFA',
					100: '#F5F5F5',
					200: '#E5E5E5',
					300: '#D4D4D4',
					400: '#A3A3A3',
					500: '#737373',
					600: '#525252',
					700: '#404040',
					800: '#262626',
					900: '#171717',
					950: '#0A0A0A',
				},
			},
			backgroundImage: {
				'blue-gradient': 'linear-gradient(180deg, #D6F1FF 0%, #E7ECFD 100%)',
				'primary-gradient': 'linear-gradient(90deg, #6366F1 0%, #A655F6 89.9%)',
				'black-gradient':
					'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.80) 100%)',
				'circle-blue-gradient':
					'linear-gradient(180deg, #E1E8FE 0%, #FFF 100%)',
				'circle-lightblue-gradient':
					'linear-gradient(180deg, #DFF4FF 0%, #FFF 100%)',
				'circle-lightgreen-gradient':
					'linear-gradient(180deg, #E2F6E4 0%, #FFF 100%)',
			},
			boxShadow: {
				xs: '0px 1px 2px 0px rgba(13, 13, 18, 0.06)',
				'circle-blue':
					'0px 8px 16px 0px rgba(13, 13, 18, 0.10), 0px 0px 0px 2px #CAD4FB',
				'circle-lightblue':
					'0px 8px 16px 0px rgba(13, 13, 18, 0.10), 0px 0px 0px 2px #B6E9FC',
				'circle-lightgreen':
					'0px 8px 16px 0px rgba(13, 13, 18, 0.10), 0px 0px 0px 2px #C4EAC7',
			},
		},
	},
	plugins: [],
}
