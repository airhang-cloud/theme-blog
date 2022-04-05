import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { TDesignResolver } from 'unplugin-vue-components/resolvers'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        AutoImport({
            resolvers: [
                TDesignResolver({
                    library: 'vue-next',
                }),
            ],
        }),
        Components({
            resolvers: [
                TDesignResolver({
                    library: 'vue-next',
                }),
            ],
        }),
        '@vue/babel-plugin-jsx',
    ],
    server: {
        port: 3066,
        host: true,
        open: true,
    },
})
