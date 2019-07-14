export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        name: 'theme-color',
        content: '#000'
      }
    ],
    htmlAttrs: {
      lang: 'en',
    },
    link: [{
        rel: 'apple-touch-icon',
        sizes: "180x180",
        href: '/apple-touch-icon.png'
      }, {
        rel: 'icon',
        type: 'image/png',
        sizes: "32x32",
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest'
      },
      {
        rel: 'mask-icon',
        color: "#fff",
        href: '/safari-pinned-tab.svg'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico'
      }, {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico'
      }, {
        rel: 'stylesheet',
        href: 'https://use.typekit.net/jtz1ukj.css'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/style/global.scss',
    '~/assets/style/vars.scss',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/v-webp.js'],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
