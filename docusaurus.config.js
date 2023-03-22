// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Rao Pics",
  tagline: "把《素材管理 App》打造为后台管理系统，实现局域网内实时共享。",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.rao.pics",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  projectName: "docs",
  organizationName: "rao-pics",
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/favicon.png",
      navbar: {
        title: "Rao Pics",
        logo: {
          alt: "My Site Logo",
          src: "img/favicon.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "文档",
          },
          {
            href: "https://github.com/rao-pics/core",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://rao.pics",
            label: "在线体验",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "介绍",
                to: "/docs/intro",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} rao.pics, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;