export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
        },
        ink: {
          DEFAULT: '#111827',
          soft: '#374151',
          muted: '#6B7280',
        },
        surface: '#F9FAFB',
        line: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '8px',
        card: '12px',
      },
      maxWidth: {
        container: '1180px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(17, 24, 39, 0.04), 0 8px 24px -12px rgba(17, 24, 39, 0.10)',
        lift: '0 2px 4px rgba(17, 24, 39, 0.04), 0 18px 40px -16px rgba(17, 24, 39, 0.18)',
      },
    },
  },
}
