import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: '../Server/dist',// Ensure this matches your output directory
//   },
//   server: {
//     historyApiFallback: true, // Handles unknown routes for React Router
//   },
// });

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: false,
    chunkSizeWarningLimit: 1600,
  },
  server: {
    port: 5173,
    open: true,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false
      }
    }
  },
  // preview configuration is used to specify settings for the preview server
  // that runs when you build your app for production and want to test it locally
  // port 8080 is set as the default preview port where the built app will be served
  preview: {
    port: 8080 // Production build preview server port
  },
  resolve: {
    alias: {
      '@': '/src'  // सोर्स फोल्डर के लिए एलियास
    }
  }
});