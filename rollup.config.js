import { babel } from '@rollup/plugin-babel';
import dts from 'rollup-plugin-dts';
const pkg = require('./package.json');
const config = [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true
    },
    plugins: [babel({
      babelHelpers: 'bundled'
    })]
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true
    },
    plugins: [babel({
      babelHelpers: 'bundled'
    })]
  },
  {
    input: 'src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts({
      compilerOptions: {
        removeComments: true
      }
    })],
  },
  {
    input: 'register/src/index.js',
    output: {
      file: 'register/dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true
    },
    externals: [
      "@themost/json"
    ],
    plugins: [babel({
      babelHelpers: 'bundled'
    })]
  },
  {
    input: 'register/src/index.js',
    output: {
      file: 'register/dist/index.esm.js',
      format: 'esm',
      sourcemap: true
    },
    externals: [
      "@themost/json"
    ],
    plugins: [babel({
      babelHelpers: 'bundled'
    })]
  },
  {
    input: 'register/src/index.d.ts',
    output: [{ file: 'register/dist/index.d.ts', format: 'es' }],
    externals: [
      "@themost/json"
    ],
    plugins: [dts({
      compilerOptions: {
        removeComments: true
      }
    })],
  },

];

export default config;