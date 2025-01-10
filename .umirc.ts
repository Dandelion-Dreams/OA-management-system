import { defineConfig } from 'umi';
const { resolve } = require('path');

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [{ path: '/', component: '@/pages/index' }],
  alias: {
    utils: resolve(__dirname, './src/utils'),
    components: resolve(__dirname, './src/components'),
    common: resolve(__dirname, './src/common'),
  },
  fastRefresh: {},
});
