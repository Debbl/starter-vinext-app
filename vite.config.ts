import { cloudflare } from '@cloudflare/vite-plugin'
import { serwist } from '@serwist/vite'
import AutoImport from 'unplugin-auto-import/vite'
import vinext from 'vinext'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    AutoImport({
      imports: [
        'react',
        {
          twl: ['cn'],
        },
        {
          from: 'motion/react-m',
          imports: [['*', 'motion']],
        },
      ],
      viteOptimizeDeps: true,
    }),
    vinext(),
    cloudflare({
      // The worker entry runs in the RSC environment, with SSR as a child.
      viteEnvironment: {
        name: 'rsc',
        childEnvironments: ['ssr'],
      },
    }),
    serwist({
      swSrc: 'src/app/sw.ts',
      swDest: 'sw.js',
      globDirectory: 'dist/client',
      injectionPoint: 'self.__SW_MANIFEST',
      rollupFormat: 'iife',
    }),
  ],
})
