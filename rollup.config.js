import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

/** Practice #6 Configure bundler:
 * 1. Bundle component files to cjs and esm formats
 * 2. Add necessary plugins to work properly in the right order
 * 3. Exclude unnecessary code from the bundle
 */

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
            sourcemap: false,
        },
        {
            file: 'dist/index.es.js',
            format: 'esm',
            sourcemap: false,
        },
    ],
    plugins: [],
};
