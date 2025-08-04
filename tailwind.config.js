// tailwind.config.js
module.exports = {
  content: [
    "./*.html",              // HTML en la raíz (como index.html)
    "./src/**/*.{html,js}",  // HTML y JS dentro de /src/
  ],
  theme: {
    extend: {
      fontFamily: {
        consola: ['Consolas', 'monospace'],
      },
      screens: {
        // Solo si quieres un breakpoint adicional
        'm680': '680px', // Esto sí funciona si Tailwind detecta las clases en los archivos incluidos arriba
      },
    },
  },
  plugins: [],
}
