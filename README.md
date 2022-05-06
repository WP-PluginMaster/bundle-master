 
let builder = require("plugin-master-js-build")


let settings = {
            port: '',
            outputDir: '',
            input: [
                {
                    source: '',
                    outputFileName: '',
                }
            ],
        }


module.exports = builder.vueVite(settings);


import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import liveReload from 'vite-plugin-live-reload'


import builder from "plugin-master-js-build";


let settings = {
  outputDir: path.resolve(__dirname, 'assets/vue22'),
  plugins: [
    vue(),
    liveReload('resources/js')
  ],
  input: [
    {
      source: 'vue/app.js',
      outputFileName: 'app',
    },
    {
      source: 'templateLibrary/app.js',
      outputFileName: 'template',
    }
  ],
}


export default defineConfig(builder.vueVite(settings));










import { defineConfig,searchForWorkspaceRoot } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import liveReload from 'vite-plugin-live-reload'

// https://vitejs.dev/config/

export default defineConfig({

  plugins: [
    vue(),
    liveReload('resources/js')
  ],
  build: {
    outDir: path.resolve(__dirname, 'assets/vue'),
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: {
        app: 'resources/js/vue/app.js',
        template: 'resources/js/templateLibrary/app.js',
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    },
  },
  server: {
    fs: {
      strict: false,
    },
    port: 3000
  }
})
