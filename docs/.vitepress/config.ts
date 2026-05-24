import { defineConfig } from 'vitepress'

export default defineConfig({
  // Org site: https://iri-ucla.github.io/ (repo IRI-UCLA.github.io)
  base: '/',
  title: 'Connection Lab',
  description: 'Guidebook for Connection Lab — Boelter Hall 3440, UCLA',
  lang: 'en-US',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    siteTitle: false,
    logo: {
      src: '/connection-lab-logo.png',
      alt: 'Connection Lab',
    },
    nav: [
      { text: 'Guidebook', link: '/guide/' },
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
    outline: {
      level: [2, 3],
      label: 'On this page',
    },
    docFooter: {
      prev: 'Previous',
      next: 'Next',
    },
    search: {
      provider: 'local',
    },
    socialLinks: [],
    footer: {
      message: 'Connection Lab · Boelter Hall 3440 · UCLA',
      copyright: 'Living guidebook — one Markdown file per page',
    },
    editLink: {
      pattern: 'https://github.com/IRI-UCLA/IRI-UCLA.github.io/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
  },
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
      },
    ],
  ],
})
