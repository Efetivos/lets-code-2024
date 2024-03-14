// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig ({
	devtools: { enabled: false },
	experimental: {
		payloadExtraction: true
	},
	app: {
		head: {
			title: `Let's Code Eat & Have Fun`,
			htmlAttrs: {
				lang: 'en'
			},
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ hid: 'description', name: 'description', content: "We are a group of enthusiastic developers (HTML, CSS, and Javascript) who meet to code, learn, eat and make friends.We'll be sharing experiences, creating collaborative projects (just for fun), challenging ourselves with coding games, and most important, expanding our network in a pleasant and friendly environment." },
				{ name: 'format-detection', content: 'telephone=no' },
				{ name: 'theme-color', content: '#000000' },
				{ name: 'og:image', content: '/cover.png' },
				{ name: 'og:image:secure_url', content: '/cover.png' },
				{ name: 'og:image:width', content: '1200' },
				{ name: 'og:image:height', content: '630' },
				{ name: 'msapplication-TileColor', content: '#000000' }
			],
			link: [
				{ rel: 'icon', type: 'image/png', href: '/favicon.png' }
			],
		},
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~/assets/sass/app.sass'
	],
	prismic: {
		endpoint: "https://lets-code.cdn.prismic.io/api/v2",
		linkResolver: "~/app/prismic/link-resolver.js",
		preview: false
	},

	vite: {
		assetsInclude: ['**/*.glb'],
	},
	modules: [
		["@nuxtjs/prismic", {
			"endpoint": "https://lets-code.cdn.prismic.io/api/v2",
		}],
		['@nuxtjs/google-fonts', {
			families: {
				'Space+Grotesk': {
					wght: [400, 600]
				},
				'Pathway+Gothic+One': {
					wght: [400]
				},
			}
		}],
		['nuxt-gtag']
	],
	gtag: {
		id: 'G-FJ2WFGXE30'
	}
})