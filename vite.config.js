import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite'; // Import the plugin
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
        Components({ // Add the auto-registration plugin
            dirs: ['resources/js/components/app', 'resources/js/components/ui'], // Directories to search for components
            extensions: ['vue'], // Only look for .vue files
            deep: true, // Recursively search directories
        }),
    ],
    resolve: {
        alias: {
            '#': path.resolve(__dirname, 'public'),
            '@': path.resolve(__dirname, 'resources/js'),
            '@app': path.resolve(__dirname, 'resources/js/components/app'),
            '@ui': path.resolve(__dirname, 'resources/js/components/ui'),
        },
    },
    build: {
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name].[hash][extname]',
            },
        },
    },
});
