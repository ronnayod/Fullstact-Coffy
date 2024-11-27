// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // ใช้สำหรับกำหนด path alias
import tsconfigPaths from 'vite-tsconfig-paths'; // ใช้เสริม

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(), // ถ้าใช้ TypeScript
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // กำหนดให้ @ ชี้ไปที่โฟลเดอร์ src
    },
  },
});
