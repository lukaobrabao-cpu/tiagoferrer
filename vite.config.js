import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    build: {
        // Divide o bundle em chunks menores para carregamento mais rápido
        rollupOptions: {
            output: {
                manualChunks: {
                    'react-vendor': ['react', 'react-dom'],
                },
            },
        },
        // Compressão máxima
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,   // remove console.log em produção
                drop_debugger: true,
            },
        },
        // Avisa se algum chunk ultrapassar 500kb
        chunkSizeWarningLimit: 500,
    },
    // Pré-carrega assets críticos
    optimizeDeps: {
        include: ['react', 'react-dom'],
    },
})
