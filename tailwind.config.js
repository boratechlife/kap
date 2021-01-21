const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ["Montserrat", ...defaultTheme.fontFamily.sans]
            },

            fontSize: {
                large: '2.5rem',
            },
            colors: {
                primary: '#3693D0',
                secondary: '#0A1F33',
            },

        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('tailwindcss-elevation')(['responsive']),
        require('@tailwindcss/custom-forms'),
    ],
}