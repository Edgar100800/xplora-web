import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
              "p-blue": "#1D3041",
              "p-gray" : "##F1F1F5",
              "p-white": "#FFFFFF",
              "p-black": "#222222",
              "p-grey": "#6A6A6A",

          },
        },
    },
    plugins: [],
};
export default config;
