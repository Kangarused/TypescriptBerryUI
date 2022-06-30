import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    plugins: [
        react(),
        htmlPlugin(loadEnv(mode, './environment'))
    ],
    envDir: './environment',
    resolve: {
        alias: <any>[
            {
                find: /^~.+/,
                replacement: (val) => {
                    return val.replace(/^~/, "");
                },
            },
        ],
    },
    build: {
        outDir: resolve(__dirname, 'dist/'),
        rollupOptions: {
            plugins: [
                //babel(),
                visualizer({
                    filename: resolve(__dirname, 'dist/stats.html'),
                    template: 'treemap', // sunburst|treemap|network
                    gzipSize: true,
                    brotliSize: true,
                })
            ]
        }
    }
}))

/**
 * Replace env variables in index.html
 * @see https://github.com/vitejs/vite/issues/3105#issuecomment-939703781
 * @see https://vitejs.dev/guide/api-plugin.html#transformindexhtml
 */
function htmlPlugin(env: ReturnType<typeof loadEnv>) {
    return {
        name: 'html-transform',
        transformIndexHtml: {
            enforce: 'pre' as const,
            transform: (html: string): string =>
                html.replace(/%(.*?)%/g, (match, p1) =>
                    env[p1] ?? match
                ),
        }
    }
}