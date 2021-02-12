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
                primary: '#009B61',
                secondary: '#FB1F1F',
            },

        },

        customForms: theme => ({
            default: {
                input: {
                    borderRadius: theme('borderRadius.lg'),
                    backgroundColor: theme('colors.gray.200'),
                    '&:focus': {
                        backgroundColor: theme('colors.white'),
                    }
                },
                select: {
                    borderRadius: theme('borderRadius.lg'),
                    boxShadow: theme('boxShadow.default'),
                },
                checkbox: {
                    width: theme('spacing.6'),
                    height: theme('spacing.6'),
                    borderColor: theme('colors.primary')
                },
            },
        })
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('tailwindcss-elevation')(['responsive']),
        require('@tailwindcss/custom-forms'),
    ],
}