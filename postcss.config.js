// const tailwindcss = require("tailwindcss");

// module.exports = {
//     plugins: [tailwindcss("./tailwind.config.js"), require("autoprefixer")],
// };

const plugin = require("tailwindcss/plugin");

module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./src/layouts/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],

    //important: true,
    theme: {
        // Important flex utilities.
        flexGrow: {
            0: 0,
            DEFAULT: 1,
            1: 1,
            2: 2,
            3: 3,
        },
        fontFamily: {
            sans: [
                "San Francisco",
                "-apple-system",
                "BlinkMacSystemFont",
                "Segoe UI",
                "Roboto",
                "Oxygen-Sans",
                "Ubuntu",
                "Cantarell",
                "Helvetica Neue",
                "sans-serif",
            ],
        },
        extend: {},
    },
    variants: {},
    plugins: [
        plugin(function({ addUtilities }) {
            const newUtilities = {
                ".bg-white-02": {
                    background: "rgba(255, 255, 255, 0.2)",
                },
                ".bg-cyan": {
                    background: "#2399EE",
                },
                ".bg-yellow": {
                    background: "#EEE623",
                },
                ".text-white-05": {
                    color: "rgba(255, 255, 255, 0.5)",
                },
            };
            addUtilities(newUtilities, ["responsive", "hover"]);
        }),
        require("@tailwindcss/forms"),
    ],
};