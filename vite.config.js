import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
            publicDirectory: 'public',
            buildDirectory: 'build'
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
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
        manifest: true,
        outDir: 'public/build',
        rollupOptions: {
            output: {
                manualChunks: undefined,
                assetFileNames: 'assets/[name].[hash][extname]',
                chunkFileNames: 'js/[name].[hash].js',
                entryFileNames: 'js/[name].[hash].js',
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
        cors: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        hmr: {
            host: process.env.RAILWAY_PUBLIC_DOMAIN
        },
    },
});
