import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
    type: 'hash'
  },
  publicPath: './',
  base: './',
  hash: true,
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
