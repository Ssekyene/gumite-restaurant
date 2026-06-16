import { merge } from 'webpack-merge';
import common from './webpack.common.js';

export default merge(common, {
  mode: 'production',
  devtool: 'source-map', // useful for debugging as well as running benchmark tests. Avoid inline-*** and eval-*** source maps in production
});