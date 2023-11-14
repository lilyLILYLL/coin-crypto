/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                blue: "#2600fc",
                pink: "#ff00ea",
                green: "rgb(14,203, 129)",
                bgColor: "#f3f3f4",
                black: "#0f051d",
                darkPurple: "#130749",
            },
            boxShadow: {
                sm: "0px 10px 5px 0px rgba(0, 0, 0, 0.16)",
            },
            fontFamily: {
                "noto-sans": "Noto Sans Georgian",
                "space-grotesk": "Space Grotesk",
            },
        },
    },

    plugins: [],
};
