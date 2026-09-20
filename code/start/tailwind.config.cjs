module.exports = {
    darkMode: 'class', // Enable dark mode
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        // Custom theme (colors, spacing, etc.)
        colors: {
          primary: '#2563EB', // Tailwind 4's improved color system
          secondary: '#F59E0B',
          dark: '#1E293B',
          // Use CSS variables for dynamic theming (new in Tailwind 4)
          dynamic: 'rgb(var(--color-dynamic) / <alpha-value>)',
        },
        // New screen sizes (Tailwind 4 includes better breakpoint defaults)
        screens: {
          'xs': '480px',
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
        },
      },
    },
    plugins: [require('@tailwindcss/typography')],
  }