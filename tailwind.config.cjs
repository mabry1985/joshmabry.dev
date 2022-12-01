const plugin = require('tailwindcss/plugin');


/** @type {import('tailwindcss').Config} */

const screenSizes = {
	'full-screen-w': '100vw',
	'half-screen-w': '50vw',
	'quarter-screen-w': '25vw',
	'full-screen-h': '100vh',
	'half-screen-h': '50vh',
	'quarter-screen-h': '25vh'
};

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Merriweather Sans', 'sans-serif'],
			serif: ['Merriweather', 'serif']
		},
		screens: {
			xs: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			xxl: '1440px',
			xxxl: '2180px'
		},
		// The defaults are completely overwritten, so manually including
		// sets from Tailwind CSS we want to use.
		// You may remove any/all of these items assuming you have removed
		// or changed any references above that depend on these.
		colors: {
			neutral: {
				transparent: 'var(--neutral-transparent)',
				white: 'var(--neutral-white)',
				'gray-100': 'var(--neutral-gray-100)',
				'gray-200': 'var(--neutral-gray-200)',
				'gray-300': 'var(--neutral-gray-300)',
				'black-100': 'var(--neutral-black-100)',
				'black-200': 'var(--neutral-black-200)',
			},
			gray: {
				50: 'var(--gray-50)',
				100: 'var(--gray-100)',
				200: 'var(--gray-200)',
				300: 'var(--gray-300)',
				400: 'var(--gray-400)',
				500: 'var(--gray-500)',
				600: 'var(--gray-600)',
				700: 'var(--gray-700)',
				800: 'var(--gray-800)',
				900: 'var(--gray-900)'
			},
			blue: {
				50: 'var(--blue-50)',
				100: 'var(--blue-100)',
				200: 'var(--blue-200)',
				300: 'var(--blue-300)',
				400: 'var(--blue-400)',
				500: 'var(--blue-500)',
				600: 'var(--blue-600)',
				700: 'var(--blue-700)',
				800: 'var(--blue-800)',
				900: 'var(--blue-900)'
			},
			red: {
				50: 'var(--red-50)',
				100: 'var(--red-100)',
				200: 'var(--red-200)',
				300: 'var(--red-300)',
				400: 'var(--red-400)',
				500: 'var(--red-500)',
				600: 'var(--red-600)',
				700: 'var(--red-700)',
				800: 'var(--red-800)',
				900: 'var(--red-900)'
			},
			yellow: {
				50: 'var(--yellow-50)',
				100: 'var(--yellow-100)',
				200: 'var(--yellow-200)',
				300: 'var(--yellow-300)',
				400: 'var(--yellow-400)',
				500: 'var(--yellow-500)',
				600: 'var(--yellow-600)',
				700: 'var(--yellow-700)',
				800: 'var(--yellow-800)',
				900: 'var(--yellow-900)'
			},
			green: {
				50: 'var(--green-50)',
				100: 'var(--green-100)',
				200: 'var(--green-200)',
				300: 'var(--green-300)',
				400: 'var(--green-400)',
				500: 'var(--green-500)',
				600: 'var(--green-600)',
				700: 'var(--green-700)',
				800: 'var(--green-800)',
				900: 'var(--green-900)'
			},
			indigo: {
				50: 'var(--red-50)',
				100: 'var(--red-100)',
				200: 'var(--red-200)',
				300: 'var(--red-300)',
				400: 'var(--red-400)',
				500: 'var(--red-500)',
				600: 'var(--red-600)',
				700: 'var(--red-700)',
				800: 'var(--red-800)',
				900: 'var(--red-900)'
			},
			purple: {
				50: 'var(--purple-50)',
				100: 'var(--purple-100)',
				200: 'var(--purple-200)',
				300: 'var(--purple-300)',
				400: 'var(--purple-400)',
				500: 'var(--purple-500)',
				600: 'var(--purple-600)',
				700: 'var(--purple-700)',
				800: 'var(--purple-800)',
				900: 'var(--purple-900)'
			},
			pink: {
				50: 'var(--pink-50)',
				100: 'var(--pink-100)',
				200: 'var(--pink-200)',
				300: 'var(--pink-300)',
				400: 'var(--pink-400)',
				500: 'var(--pink-500)',
				600: 'var(--pink-600)',
				700: 'var(--pink-700)',
				800: 'var(--pink-800)',
				900: 'var(--pink-900)'
			}
		},
		fontSize: {
			xs: ['var(--fs-xs)', { lineHeight: 'var(--lh-xs)' }],
			sm: ['var(--fs-sm)', { lineHeight: 'var(--lh-sm)' }],
			base: ['var(--fs-base)', { lineHeight: 'var(--lh-base)' }],
			lg: ['var(--fs-lg)', { lineHeight: 'var(--lh-lg)' }],
			xl: ['var(--fs-xl)', { lineHeight: 'var(--lh-xl)' }],
			'2xl': ['var(--fs-2xl)', { lineHeight: 'var(--lh-2xl)' }],
			'3xl': ['var(--fs-3xl)', { lineHeight: 'var(--lh-3xl)' }],
			'4xl': ['var(--fs-4xl)', { lineHeight: 'var(--lh-4xl)' }],
			'5xl': ['var(--fs-5xl)', { lineHeight: 'var(--lh-5xl)' }],
			'6xl': ['var(--fs-6xl)', { lineHeight: 'var(--lh-6xl)' }],
			'7xl': ['var(--fs-7xl)', { lineHeight: 'var(--lh-7xl)' }],
			'8xl': ['var(--fs-8xl)', { lineHeight: 'var(--lh-8xl)' }],
			'9xl': ['var(--fs-9xl)', { lineHeight: 'var(--lh-9lx)' }]
		},
		fontWeight: {
			thin: 'var(--fw-extralight)',
			extralight: 'var(--fw-thin)',
			light: 'var(--fw-light)',
			normal: 'var(--fw-normal)',
			medium: 'var(--fw-medium)',
			semibold: 'var(--fw-semibold)',
			bold: 'var(--fw-bold)',
			extrabold: 'var(--fw-extrabold)',
			black: 'var(--fw-black)'
		},
		extend: {
			colors: {
				primary: '#D2ECFF',
				secondary: '#134562',
				dark: '#121212'
			},
			height: {
				...screenSizes
			},
			maxHeight: {
				...screenSizes
			},
			width: {
				...screenSizes
			},
			maxWidth: {
				...screenSizes
			}
		}
	},
	plugins: [
      plugin(function ({ addUtilities }) {
              // `md` breakpoint.
      const screenMediumMediaQuery = '@media (min-width: 769px)';

      // `lg` breakpoint.
      const screenLargeMediaQuery = '@media (min-width: 1025px)';

      const responsiveText = {
        '.text-base-responsive': {
          fontSize: 'var(--fs-base)',
          lineHeight: 'var(--lh-base)',
          [screenMediumMediaQuery]: {
            fontSize: 'var(--fs-base-medium)',
            lineHeight: 'var(--lh-base-medium)',
          },
          [screenLargeMediaQuery]: {
            fontSize: 'var(--fs-base-large)',
            lineHeight: 'var(--lh-base-large)',
          },
        },
        '.text-h1-super-responsive': {
          fontSize: 'var(--fs-h1-super)',
          lineHeight: 'var(--lh-h1-super)',
          [screenMediumMediaQuery]: {
            fontSize: 'var(--fs-h1-super-medium)',
            lineHeight: 'var(--lh-h1-super-medium)',
          },
          [screenLargeMediaQuery]: {
            fontSize: 'var(--fs-h1-super-large)',
            lineHeight: 'var(--lh-h1-super-large)',
          },
        },
        '.text-h1-responsive': {
          fontSize: 'var(--fs-h1)',
          lineHeight: 'var(--lh-h1)',
          [screenMediumMediaQuery]: {
            fontSize: 'var(--fs-h1-medium)',
            lineHeight: 'var(--lh-h1-medium)',
          },
          [screenLargeMediaQuery]: {
            fontSize: 'var(--fs-h1-large)',
            lineHeight: 'var(--lh-h1-large)',
          },
        },
        '.text-h2-responsive': {
          fontSize: 'var(--fs-h2)',
          lineHeight: 'var(--lh-h2)',
          [screenMediumMediaQuery]: {
            fontSize: 'var(--fs-h2-medium)',
            lineHeight: 'var(--lh-h2-medium)',
          },
          [screenLargeMediaQuery]: {
            fontSize: 'var(--fs-h2-large)',
            lineHeight: 'var(--lh-h2-large)',
          },
        },
        '.text-h3-responsive': {
          fontSize: 'var(--fs-h3)',
          lineHeight: 'var(--lh-h3)',
          [screenMediumMediaQuery]: {
            fontSize: 'var(--fs-h3-medium)',
            lineHeight: 'var(--lh-h3-medium)',
          },
          [screenLargeMediaQuery]: {
            fontSize: 'var(--fs-h3-large)',
            lineHeight: 'var(--lh-h3-large)',
          },
        },
        '.text-h4-responsive': {
          fontSize: 'var(--fs-h4)',
          lineHeight: 'var(--lh-h4)',
          [screenMediumMediaQuery]: {
            fontSize: 'var(--fs-h4-medium)',
            lineHeight: 'var(--lh-h4-medium)',
          },
          [screenLargeMediaQuery]: {
            fontSize: 'var(--fs-h4-large)',
            lineHeight: 'var(--lh-h4-large)',
          },
        },
        '.text-h5-responsive': {
          fontSize: 'var(--fs-h5)',
          lineHeight: 'var(--lh-h5)',
          [screenMediumMediaQuery]: {
            fontSize: 'var(--fs-h5-medium)',
            lineHeight: 'var(--lh-h5-medium)',
          },
          [screenLargeMediaQuery]: {
            fontSize: 'var(--fs-h5-large)',
            lineHeight: 'var(--lh-h5-large)',
          },
        },
        '.text-h6-responsive': {
          fontSize: 'var(--fs-h6)',
          lineHeight: 'var(--lh-h6)',
          [screenMediumMediaQuery]: {
            fontSize: 'var(--fs-h6-medium)',
            lineHeight: 'var(--lh-h6-medium)',
          },
          [screenLargeMediaQuery]: {
            fontSize: 'var(--fs-h6-large)',
            lineHeight: 'var(--lh-h6-large)',
          },
        },
      };

      addUtilities(responsiveText);
      })
  ]
};