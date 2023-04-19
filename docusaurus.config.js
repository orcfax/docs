// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Orcfax',
  tagline: 'Trustworthy Cardano Oracle',
  url: 'https://orcfax.github.io',
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'orcfax', // Usually your GitHub org/user name.

  // Usually your repo name.
  projectName: 'docs',

  // This needs to be explicit as a config field or environment variable for projects not
  // ending .github.io.
  deploymentBranch: 'd2mightysaurus',

  trailingSlash: false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // whether to index blog pages
        indexBlog: false,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        /* title: 'Docs', */
        logo: {
          alt: 'Orcfax Logo',
          src: 'img/orcfax-logo-text.png',
          href: 'https://orcfax.io',
        },
        items: [
          {
            to: 'https://orcfax.io#about',
            position: 'right',
            label: 'About',
          },
          {
            to: 'https://orcfax.io#contact',
            position: 'right',
            label: 'Contact',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Orcfax LLC`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
