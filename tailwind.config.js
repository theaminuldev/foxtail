/** @type {import('tailwindcss').Config} */
export default {
  // Specify the paths to all of the files that should be scanned for classes
  content: [
    "./src/**/*.html",
    "./src/**/*.jsx",
    "./src/**/*.js",
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],

  // Add or extend the default configuration
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.25rem",
      },
      colors: {
        clifford: "#da373d",
      },
    },
  },

  // Enable or disable plugins
  plugins: [
    // Add any additional plugins you want to use
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
  ],

  // Control the variants generated
  variants: {
    extend: {
      // enable or disable variants for specific utilities
      // opacity: ['disabled'],
    },
  },

  // Enable JIT (Just-In-Time) mode
  // JIT mode significantly speeds up build times by generating styles on demand
  // Uncomment the following lines to enable JIT mode
  // mode: 'jit',
  // purge: [
  //   './src/**/*.html',
  //   './src/**/*.jsx',
  //   './src/**/*.js',
  // ],
};
