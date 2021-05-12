import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

const packageJson = './package.json';

export default {
    input: 'src/index.js',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: false,
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: false,
        },
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/env', '@babel/preset-react'],
        }),
        commonjs(),
        postcss({
            extract: true,
            modules: true,
            minimize: true,
        }),
    ],
    external: ['@audnavds/button'],
};
