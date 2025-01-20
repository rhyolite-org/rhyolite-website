// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			customCss: [
				'./src/styles/global.css',
			  ],
			  logo: {
				src: './src/assets/logo.png',
				// replacesTitle: true, // Hide the site title
			  },
			title: 'Rhyolite',
			social: {
				github: 'https://github.com/rhyolite-org/rhyolite',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
