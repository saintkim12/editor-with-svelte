/* eslint-env node */
// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration
/** @type {import("snowpack").SnowpackUserConfig } */
// import proxy from 'http2-proxy'
export default {
  mount: {
    /* ... */
    public: '/',
    src: '/dist',
    static: {
      url: '/',
      static: true
    }
  },
  alias: {
    '@src': './src'
  },
  plugins: [
    /* ... */
    ['@snowpack/plugin-sass', {}],
    '@snowpack/plugin-svelte',
  ],
  routes: [
  ],
  optimize: {
    /* Example: Bundle your final build: */
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
    port: 5000
  },
  buildOptions: {
    /* ... */
  },
}
