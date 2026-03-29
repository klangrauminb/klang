import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://klangraum-in-balance.de',
  integrations: [tailwind()],
  output: 'static',
  compressHTML: true,
  trailingSlash: 'always',
  build: {
    format: 'directory',
    assets: '_assets'
  }
});
