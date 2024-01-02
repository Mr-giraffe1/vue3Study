import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { ElementPlusResolver } from 'unplugin-vue-components/dist/resolvers';
import AutoImport from 'unplugin-auto-import/dist/vite';
import Components from 'unplugin-vue-components/dist/vite';
import path from 'path';
import os from 'os';

function getIPads() {
  const interfaces = os.networkInterfaces();
  for (let devName in interfaces) {
    let inter = interfaces[devName];
    for (let i = 0; i < inter.length; i++) {
      let alias = inter[i];
      if (alias.family === 'IPv4' && alias.address !== '0.0.0.0' && !alias.internal) {
        return alias.address;
      }
    }
  }
}

export default defineConfig(({ command, mode }) => {
  const envConfig: any = loadEnv(mode, process.cwd());

  return {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import '@/styles/base.scss';`
        }
      }
    },
    base: envConfig.VITE_BASE_URL,
    root: process.cwd(),
    plugins: [vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[name]',
      })
    ],
    server: {
      host: '0.0.0.0',
      port: envConfig.VITE_PORT,
      proxy: {
        '/v1': {
          target: 'https://channel.uaeee.com/',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      },
      open: true
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src')
      }
    },
    build: {
      outDir: envConfig.VITE_OUTPUT_DIR
    }
  }
})