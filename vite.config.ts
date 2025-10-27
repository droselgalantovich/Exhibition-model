import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }],
        ],
      },
    }),
    legacy({
      targets: ['chrome 28', 'samsung 4'],
      modernPolyfills: true,
      renderLegacyChunks: true,
      additionalLegacyPolyfills: [
        'regenerator-runtime/runtime',
        'core-js/stable',
      ],
      polyfills: [
        'es.symbol',
        'es.array.filter',
        'es.promise',
        'es.promise.finally',
        'es/map',
        'es/set',
        'es.array.for-each',
        'es.object.define-properties',
        'es.object.define-property',
        'es.object.get-own-property-descriptor',
        'es.object.get-own-property-descriptors',
        'es.object.keys',
        'es.object.to-string',
        'web.dom-collections.for-each',
        'esnext.global-this',
        'esnext.string.match-all',
      ],
    }),
  ],
  build: {
    target: 'es2015',
    cssTarget: 'chrome61',
    minify: 'terser',
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
});
