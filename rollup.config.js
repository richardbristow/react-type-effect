import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

import packageJson from './package.json';

export default {
  input: './src/index.js',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      plugins: [terser()],
    },
    {
      file: packageJson.module,
      format: 'es',
      sourcemap: true,
      plugins: [terser()],
    },
  ],
  plugins: [
    peerDepsExternal(),
    nodeResolve({ extensions: ['.mjs', '.js', '.json', '.node', '.jsx'] }),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
  ],
};
