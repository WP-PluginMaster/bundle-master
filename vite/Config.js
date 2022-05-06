const {defineConfig} =  require("vite");

const config = {
    plugins: [
    ],
    build: {
        emptyOutDir: true,
        manifest: true,
        rollupOptions: {
            input: {},
            output: {
                entryFileNames: `[name].js`,
                chunkFileNames: `[name].js`,
                assetFileNames: `[name].[ext]`
            }
        },
    },
    server: {

        fs: {
            strict: false,
        },
        hmr: {
            protocol: 'ws',
            host: 'localhost'
        },
        port: 3000
    },
    resolve: {
        alias: {
        }
    }
}

module.exports = defineConfig(config);
