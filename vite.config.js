import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 根據目前工作目錄中的 `mode` 載入 .env 文件
  // 設定第三個參數為 '' 來載入所有環境變量，而不管是否有 `VITE_` 前綴
  const env = loadEnv(mode, process.cwd(), '')

  return {
    // vite 配置
    plugins: [vue()],
    base: process.env.NODE_ENV === 'production' ? '/PersonalBrand/dist/' : '/',
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV)
    },
    build: {
      assetsDir: 'assets',
      minify: true
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})

// export default defineConfig({
//   plugins: [vue()],
//   build: {
//     minify: true
//   },
//   base: process.env.NODE_ENV === 'production' ? '/PersonalBrand/' : './',
//   // publicPath: import.meta.env.VITE_NODE_ENV === 'production' ? '/PersonalBrand/' : '/',
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   }
// })
