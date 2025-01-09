import { util } from 'prettier';
import { defineConfig } from 'umi';
const { resolve } = require('path');

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [{ path: '/', component: '@/pages/index' }],
  alias: {
    utils: resolve(__dirname, './src/utils'),
  },
  fastRefresh: {},
});
