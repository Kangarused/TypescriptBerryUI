module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {},
    },
    corePlugins: {
        // Remove Tailwind CSS's preflight style so it can use the MUI's preflight instead (CssBaseline).
        preflight: false,
    },
    plugins: [],
}
