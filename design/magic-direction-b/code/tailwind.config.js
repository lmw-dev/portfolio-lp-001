export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05070D',
          900: '#080C15',
          850: '#0C1220',
          800: '#111A2B',
          700: '#1A2438',
          600: '#26314A',
        },
        sky: {
          400: '#38BDF8',
          500: '#0EA5E9',
        },
        iris: {
          400: '#8B87F5',
          500: '#6C63F0',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
}
