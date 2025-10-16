/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all files that contain Nativewind classes.
    content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
    presets: [require('nativewind/preset')],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#fef2f3',
                    100: '#fde3e5',
                    200: '#fcccd0',
                    300: '#f9a8ae',
                    400: '#f3767f',
                    500: '#e63946',
                    600: '#d52d3a',
                    700: '#b3222d',
                    800: '#942029',
                    900: '#7b2128',
                },
            },
        },
    },
    plugins: [],
};
