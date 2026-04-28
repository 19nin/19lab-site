import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://19lab.app',
  integrations: [tailwind()],
  adapter: cloudflare()
});