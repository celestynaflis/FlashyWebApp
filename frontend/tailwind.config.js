/** @type {import('tailwindcss').Config} */
module.exports = {
    // In Tailwind v4 active color tokens are defined in app/globals.css via @theme.
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {

                white: "#FFFFFF",
                background: "#FCFCFC",
                lightGrey: "#F5F5F5",
                grey: "#D7D7D7",
                darkGrey: "#A5A5A5",
                black: "#363636",

                pink: {
                    light: "#FFC5DB",
                    DEFAULT: "#FF70A6",
                },
                orange: {
                    light: "#FFCBB8",
                    DEFAULT: "#FF9770",
                },
                yellow: {
                    light: "#FFE8AF",
                    DEFAULT: "#FFD670",
                },
                green: {
                    light: "#E6F1C6",
                    DEFAULT: "#C6D791",
                },
                blue: {
                    light: "#BCECFF",
                    DEFAULT: "#70D6FF",
                },
                red: {
                    light: "#FF7070",
                    DEFAULT: "#FF4D4D",
                }
            },

            fontSize: {
                "clamp-xs": "clamp(0.75rem,0.7143rem+0.1786vw,0.875rem)",
                "clamp-sm": "clamp(0.875rem,0.8393rem+0.1786vw,1rem)",
            },
        },
    },
    plugins: [],
};