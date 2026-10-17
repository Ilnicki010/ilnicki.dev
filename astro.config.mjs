import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';

export default defineConfig({
  site: 'https://ilnicki.dev',
  output: 'static',
  trailingSlash: 'always',
  markdown: {
    processor: satteri({
      hastPlugins: [{
        name: 'focusable-tables',
        element: {
          filter: ['table'],
          visit(node, context) {
            // Let keyboard users scroll wide tables, including without JavaScript.
            context.setProperty(node, 'tabIndex', 0);
          },
        },
      }],
    }),
    shikiConfig: {
      themes: {
        light: 'github-light-high-contrast',
        dark: 'github-dark',
      },
    },
  },
});
