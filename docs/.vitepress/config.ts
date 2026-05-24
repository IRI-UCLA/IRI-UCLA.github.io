import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Connection Lab',
  description: 'Guidebook for Connection Lab — Boelter Hall 3440, UCLA',
  lang: 'en-US',
  themeConfig: {
    siteTitle: 'CL @ BH 3440',
    nav: [
      { text: 'Guide', link: '/guide/' },
    ],
    sidebar: [
      {
        text: 'Guidebook',
        items: [
          { text: 'Overview', link: '/guide/' },
          { text: 'Server use', link: '/guide/server-use' },
          { text: 'Lab use', link: '/guide/lab-use' },
          { text: 'Lighting', link: '/guide/lighting' },
          { text: 'Directions', link: '/guide/directions' },
          { text: 'Printing & storage', link: '/guide/printing-and-storage' },
          { text: 'General guidelines', link: '/guide/general-guidelines' },
        ],
      },
    ],
    socialLinks: [],
    footer: {
      message: 'Connection Lab · Boelter Hall 3440 · UCLA',
      copyright: 'Living guidebook — update as the lab evolves',
    },
    editLink: {
      pattern: 'https://github.com/connectionlab/CL-BH3440/edit/main/docs/:path',
      text: 'Edit this page',
    },
  },
})
