import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "andrescortesdev",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  url: "https://andrescortes.dev",
  baseUrl: "/",
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-6T9E1KGJN8",
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    require.resolve("./plugins/webpack-alias.ts"),
    [
      "@docusaurus/plugin-pwa",
      {
        debug: false,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          { tagName: "link", rel: "icon", href: "/img/logo.png" },
          { tagName: "link", rel: "manifest", href: "/manifest.json" },
          { tagName: "meta", name: "theme-color", content: "#0d47a1" },
        ],
      },
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    colorMode: { respectPrefersColorScheme: true },
    navbar: {
      title: "Robinson Andres Cortes",
      logo: { alt: "My Site Logo", src: "img/logo.svg" },
      items: [
        {
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Cursos",
          to: "cursos",
        },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutoriales",
          href: "/tutoriales",
        },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Premium",
          className: "navbar-item-premium",
        },
        // RIGHT
        {
          href: "https://linkedin.com/in/andrescortesdev",
          position: "right",
          className: "navbar-icon navbar-linkedin-link navbar-hide-mobile",
          "aria-label": "LinkedIn account",
        },
        {
          href: "https://x.com/andrescortesdev",
          position: "right",
          className: "navbar-icon navbar-x-link navbar-hide-mobile",
          "aria-label": "X account",
        },
        // Icono de YouTube
        {
          href: "https://youtube.com/@andrescortesdev",
          position: "right",
          className: "navbar-icon navbar-youtube-link navbar-hide-mobile",
          "aria-label": "YouTube channel",
        },
        {
          href: "https://github.com/andrescortesdev/",
          position: "right",
          className: "navbar-icon navbar-github-link navbar-hide-mobile",
          "aria-label": "GitHub repository",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      copyright: `© ${new Date().getFullYear()} andrescortes.dev`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  future: { v4: true },
};

export default config;
