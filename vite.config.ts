import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/React-TodoApp/",
  test: {
    environment: "jsdom",
    globals: true,
  },
})
