import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
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
            '@': path.resolve(__dirname, './resources/js'),
            '~': path.resolve(__dirname, './resources'),
        },
    },
    build: {
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name].[hash][extname]', // Custom asset filename handling
            },
        },
    },
    css: {
        preprocessorOptions: {
            css: {
                includePaths: [
                    path.resolve(__dirname, 'resources/js/styles'),
                    path.resolve(__dirname, 'resources/css')
                ]
            }
        }
    },
    server: {
        https: false,
        host: true,
        port: 3000,
        hmr: {
            host: 'localhost',
        },
    },
});
