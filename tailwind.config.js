export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          'dark-bg': '#0a0a0a',
          'dark-card': '#1a1a1a',
          'dark-text': '#e0e0e0',
          'accent-neon': '#3b82f6'
        },
        boxShadow: {
          'neon': '0 0 15px #3b82f6'
        }
      }
    },
    plugins: []
  }
  