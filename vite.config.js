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
            '@': '/resources/js',
            '@components': '/resources/js/Components',
            '@styles': '/resources/js/styles',
            '@utils': '/resources/js/utils'
        }
    },
    build: {
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name].[hash][extname]',
            },
        },
    },
});