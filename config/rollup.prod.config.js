import { input, output, plugins } from './rollup.config';
import replace from '@rollup/plugin-replace';

const prodPugins = [...plugins];
prodPugins.unshift(
  replace({
    preventAssignment: true,
    'process.env.NODE_ENV': JSON.stringify('production'),
  })
);

const prodRollup = [
  {
    input,
    output,
    plugins: prodPugins,
  },
];
export default prodRollup;
