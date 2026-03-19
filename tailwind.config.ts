import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./sanity/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#15120f",
        ivory: "#f8f2e8",
        cream: "#fffaf4",
        butter: "#f5d978",
        gold: "#c7a86c",
        cocoa: "#8f5d3c",
        mist: "#ede2d2",
      },
      fontFamily: {
        display: ['"Iowan Old Style"', '"Palatino Linotype"', '"Book Antiqua"', "Georgia", "serif"],
        body: ['"Avenir Next"', "Avenir", '"Segoe UI"', '"Helvetica Neue"', "Arial", "sans-serif"],
        script: ['"Snell Roundhand"', '"Apple Chancery"', '"URW Chancery L"', "cursive"],
      },
      boxShadow: {
        soft: "0 18px 60px rgba(28, 20, 13, 0.08)",
        card: "0 12px 32px rgba(28, 20, 13, 0.09)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top, rgba(245,217,120,0.28), transparent 42%), linear-gradient(135deg, rgba(255,250,244,0.96), rgba(248,242,232,0.92))",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 2.4s linear infinite",
        rise: "rise 0.7s ease-out both",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
