import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
                slab: ['Bespoke Slab', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'primary-black': '#000000',
                'text': '#f3edf2',
                'primary-pink': '#FF8F83',
                'secondary-pink': '#E0E0E0',
               
     

                
            },
        },
    },

    plugins: [forms],
};
