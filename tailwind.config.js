/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./component/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        /* =========================
         * Base / Background Colors
         * ========================= */
        background: {
          DEFAULT: "#F5F3F9", // Main app background
          white: "#FFFFFF",
        },

        /* =========================
         * Brand (Purple)
         * ========================= */
        primary: {
          50: "#FAF5FF",
          100: "#EDE9FE",
          200: "#E9D5FF",
          500: "#8B5CF6",
          600: "#7C3AED",
        },

        /* =========================
         * Gray Scale
         * ========================= */
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
        },

        /* =========================
         * Status / Accent Colors
         * ========================= */
        success: "#10B981", // green-500
        error: "#EF4444",   // red-500
        warning: "#F97316", // orange-500
        info: "#7C3AED",

        /* =========================
         * Standard Tailwind Colors (extended)
         * ========================= */
        red: {
          500: "#EF4444",
          600: "#DC2626",
        },
        orange: {
          500: "#F97316",
          600: "#EA580C",
        },
        green: {
          500: "#10B981",
          600: "#059669",
        },
        emerald: {
          500: "#10B981",
        },
        blue: {
          600: "#2563EB",
        },
        indigo: {
          100: "#E0E7FF",
          600: "#4F46E5",
        },
        yellow: {
          100: "#FEF3C7",
          600: "#D97706",
        },
        cyan: {
          100: "#CFFAFE",
          600: "#0891B2",
        },
        pink: {
          100: "#FCE7F3",
          400: "#F0ABFC",
          600: "#DB2777",
        },

        /* =========================
         * Text Colors (Semantic)
         * ========================= */
        text: {
          primary: "#1F2937",
          secondary: "#6B7280",
          muted: "#9CA3AF",
          white: "#FFFFFF",
        },

        /* =========================
         * Icon Backgrounds
         * ========================= */
        iconBg: {
          purple: "#EDE9FE",
          indigo: "#E0E7FF",
          green: "#D1FAE5",
          yellow: "#FEF3C7",
          blue: "#DBEAFE",
          red: "#FEE2E2",
          orange: "#FFEDD5",
          cyan: "#CFFAFE",
          pink: "#FCE7F3",
          gray: "#F3F4F6",
        },

        /* =========================
         * Icon Colors
         * ========================= */
        icon: {
          purple: "#7C3AED",
          indigo: "#4F46E5",
          green: "#059669",
          yellow: "#D97706",
          blue: "#2563EB",
          red: "#DC2626",
          orange: "#EA580C",
          cyan: "#0891B2",
          pink: "#DB2777",
          gray: "#4B5563",
        },

        /* =========================
         * Category Colors
         * ========================= */
        category: {
          food: "#FF6B6B",
          transport: "#4ECDC4",
          shopping: "#FFE66D",
          entertainment: "#A8E6CF",
          bills: "#FF8B94",
          healthcare: "#C7CEEA",
          income: "#95E1D3",
        },
      },

      /* =========================
       * Border Radius
       * ========================= */
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
        "3xl": "24px",
        full: "9999px",
      },
    },
  },
  plugins: [],
};