import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import tailwind from '@astrojs/tailwind';
import { sanityConfig } from './src/utils/sanity-client';

// https://astro.build/config
export default defineConfig({
    image: {
        domains: ['cdn.sanity.io']
    },
    integrations: [
        sanity(sanityConfig),
        sanity({studioBasePath: '/studio' // If you want to access the Studio on a route}),
        tailwind({
            applyBaseStyles: false
        })
    ],
    vite: {
        server: {
            hmr: { path: '/vite-hmr/' },
            allowedHosts: ['.netlify.app']
        }
    },
    server: {
        port: 3000
    }
});
