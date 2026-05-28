import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'ReactModalWh',
            formats: ['es'],
            fileName: () => 'index.js',
        },
        rollupOptions: {
            external: (id) => id === 'react' || id === 'react-dom' || id.startsWith('react/'),
        },
    },
})