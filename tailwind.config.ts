// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  // ... konfigurasi lainnya
  theme: {
    extend: {
      // ... ekstensi lainnya
      animation: {
        // Definisikan animasi custom di sini
        'spin-slow': 'spin 5s linear infinite',
      },
    },
  },
  // ... plugins
}
export default config