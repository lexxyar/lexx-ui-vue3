module.exports = {
    purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            spacing: {
                // '97': '25rem',
                '112': '28rem',
                '128': '32rem',
                '144': '36rem',
            },
            borderWidth:{
                '3': '3px',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
