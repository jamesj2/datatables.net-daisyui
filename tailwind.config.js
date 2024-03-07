/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/**/views/**/*.blade.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.{vue,js,ts,hbs,handlebars,html}'
    ],
    plugins: [
        require('daisyui')
    ],
    daisyui: {
        base: true,
        darkTheme: false,
        prefix: 'daisy-'
    },
    safelist: [
        {
            pattern: /daisy-btn.*/
        },
        {
            pattern: /daisy-input.*/
        },
        {
            pattern: /daisy-select.*/
        },
        {
            pattern: /daisy-join.*/
        }
    ]
}

