// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import tailwindPlugin from './plugins/tailwind-config.cjs';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Teradata AI Unlimited',
  tagline: 'A scalable, serverless compute engine in any cloud.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://owilliams320.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/td-ai-unlimited-docs',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'teradata', // Usually your GitHub org/user name.
  projectName: 'td-ai-unlimited-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        'http-equiv': 'Content-Security-Policy',
        content:
          "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: https://avatars.githubusercontent.com https://github.com",
      },
    },
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'fr', 'es', 'zh', 'ja'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
      },
    },
  },

  plugins: [
    tailwindPlugin,
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'releases',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'releases',
        blogSidebarTitle: 'All Releases',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './releases',
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/owilliams320/td-ai-unlimited-docs/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: 'whatsnew',
          editUrl:
            'https://github.com/owilliams320/td-ai-unlimited-docs/whatsnew',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      metadata: [{ name: 'keywords', content: 'Teradata, AI Unlimited' }],
      navbar: {
        title: 'AI Unlimited',
        logo: {
          alt: 'Teradata AI Unlimited logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          { to: '/whatsnew', label: "What's new", position: 'left' },
          { to: '/releases', label: 'Releases', position: 'left' },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/Teradata/ai-unlimited',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      navItems: {
        title: 'AI Unlimited',
        navItems: [
          {
            active: true,
            href: 'https://quickstarts.teradata.com/',
            label: 'Getting started',
          },
          {
            label: 'Docs',
            navItems: [
              {
                label: 'VantageCloud Lake Documentation',
                href: 'https://docs.teradata.com/p/VantageCloud/Lake',
              },
              {
                label: 'AI Unlimited',
                href: 'https://owilliams320.github.io/td-ai-unlimited-docs/docs/install-ai-unlimited/',
              },
              {
                label: 'All Documentation',
                href: 'https://docs.teradata.com/',
              },
            ],
          },
          {
            href: 'https://downloads.teradata.com/',
            label: 'Downloads',
          },
          {
            label: 'Community',
            navItems: [
              {
                label: 'Teradata Community',
                href: 'https://support.teradata.com/community',
              },
              {
                label: 'Technical Medium Blogs',
                href: 'https://medium.com/teradata',
                external: true,
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Teradata',
                external: true,
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/teradata',
                external: true,
              },
            ],
          },
        ],
        languages: [
          {
            label: 'Global',
            value: 'en-US',
          },
          {
            label: 'France',
            value: 'fr-FR',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/install-ai-unlimited',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/whatsnew',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Teradata/ai-unlimited',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Built with ❤️ by Teradata`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'docker'],
      },
    }),
};

export default config;
