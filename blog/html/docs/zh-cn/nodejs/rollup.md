# rollup

> install

``` bash

npm i rollup
```

> rollup.config.js

``` js
import path from 'path';

import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import progress from 'rollup-plugin-progress';
import { eslint } from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

const { name, dependencies } = pkg;
const entry = path.resolve(process.cwd(), 'src/index.js');

const IS_DEV = process.env.NODE_ENV !== 'production';

const FORMAT_MODE_ES = 'es';
const FORMAT_MODE_CJS = 'cjs';
const FORMAT_MODE_UMD = 'umd';

const external = [...Object.keys(dependencies)];

const __config = {
    plugins: {
        replace: {
            'process.env.NODE_ENV': JSON.stringify('production')
        },
        babel: {
            exclude: 'node_modules/**',
            extensions: ['.js'],
            runtimeHelpers: true
        }
    }
};

const createConfig = (input, format) => {
    const plugins = [
        json(),
        replace(__config.plugins.replace),
        resolve(),
        babel(__config.plugins.babel),
        commonjs(),
        eslint({
            throwOnError: false,
            throwOnWarning: false,
            include: ['src/**/*.js'],
            exclude: ['node_modules/**']
        }),
        progress(),
        filesize(),
        !IS_DEV && format === FORMAT_MODE_UMD && terser()
    ];

    if (format === FORMAT_MODE_UMD)
        return {
            input,
            output: {
                file: `dist/umd/${name}.min.js`,
                name: 'Track',
                format,
                exports: 'named'
            },
            plugins,
            external
        };

    return {
        input,
        output: {
            dir: `dist/${format}/index.js`,
            format,
            exports: 'named'
        },
        plugins,
        external
    };
};

export default [
    createConfig(entry, FORMAT_MODE_ES),
    createConfig(entry, FORMAT_MODE_CJS),
    createConfig(entry, FORMAT_MODE_UMD)
];

```
