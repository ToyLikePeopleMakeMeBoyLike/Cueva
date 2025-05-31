/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}', // If using Pages Router
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}', // Added containers
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', // For App Router
  ],
  theme: {
    extend: {
      colors: {
        'background-primary': '#0A192F',
        'background-secondary': '#1D2D50',
        'text-primary': '#CCD6F6',
        'text-secondary': '#8892b0', // Placeholder - common secondary text color for dark themes
        'text-tertiary': '#a8b2d1', // Placeholder - common tertiary text color for dark themes
        'accent': '#64ffda',        // Placeholder - common accent color (teal/cyan)
        'transparent-white': 'rgba(255, 255, 255, 0.08)', // From user's Navbar.tsx example
        'torch': '#ffeb3b', // Placeholder for bg-torch (bright yellow) - can be refined in globals.css if complex
      },
      // Example of extending other theme properties if needed:
      // backgroundImage: {
      //   'torch-gradient': 'radial-gradient(circle, rgba(255,235,59,0.5) 0%, rgba(10,25,47,0) 70%)', // Example for a torch effect
      // },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'), // If line-clamp utilities are used
  ],
};
