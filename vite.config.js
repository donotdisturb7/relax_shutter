import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                    // Configure Vue to handle asset URLs correctly
                    // for images and other assets within components
                    tags: {
                        img: ['src'],
                        image: ['xlink:href', 'href'],
                        video: ['src', 'poster'],
                        source: ['src'],
                        object: ['data'],
                        embed: ['src'],
                    },
                },
            },
        }),
    ],
    resolve: {
        alias: {
            '#': path.resolve(__dirname, 'public'), // Default alias for Vue files
            'assets': path.resolve(__dirname, 'resources/assets'), // Alias for assets (images, etc.)
        },
    },
    build: {
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name].[hash][extname]', // Custom asset filename handling
            },
        },
    },
});
