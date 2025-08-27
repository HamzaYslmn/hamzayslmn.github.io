/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#121212',
          secondary: '#1a1a1a',
        },
        card: {
          DEFAULT: '#1e1e1e',
          hover: '#252525',
        },
        txt: {
          DEFAULT: '#fafafa',
          secondary: '#e0e0e0',
        },
        muted: {
          DEFAULT: '#999',
          light: '#ccc',
        },
        accent: {
          DEFAULT: '#fafafa',
          secondary: '#e0e0e0',
          tertiary: '#ccc',
        },
        border: {
          DEFAULT: '#393939',
          light: '#555',
        },
      },
      fontFamily: {
        inter: ['Inter', 'Segoe UI', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      maxWidth: {
        'container': '1200px',
      },
      borderRadius: {
        'default': '12px',
      },
      boxShadow: {
        'custom': '0 8px 24px rgba(0, 0, 0, 0.3)',
        'light': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'glow': '0 0 0 4px rgba(250, 250, 250, 0.25), 0 0 16px 4px rgba(250, 250, 250, 0.35), 0 6px 20px rgba(255, 255, 255, 0.15)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'media',
}
