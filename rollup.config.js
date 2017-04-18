// Rollup plugins
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'src/test.js',
  dest: 'build/lib.js',
  format: 'cjs',
  moduleName: 'MyModule',
  plugins: [
    resolve({
      module: true,
      jsnext: true,
      main: true,
    }),
    commonjs(),
    babel(),
  ],
};
