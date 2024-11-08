import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: "Orcfax",
    tagline: "Trustworthy Cardano Oracle",
    url: "https://orcfax.github.io",
    baseUrl: "/",
    favicon: "img/favicon.ico",

    // GitHub pages deployment config.
    organizationName: "orcfax",
    projectName: "docs",
    // This needs to be explicit as a config field or environment variable for projects not
    // ending .github.io.
    deploymentBranch: "d2mightysaurus",

    onBrokenLinks: "warn",
    onBrokenMarkdownLinks: "warn",

    trailingSlash: false,

    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                    routeBasePath: "/",
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex],
                },
                blog: false,
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    stylesheets: [
        {
            href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
            type: "text/css",
            integrity: "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
            crossorigin: "anonymous",
        },
    ],

    themeConfig: {
        // Replace with your project's social card
        image: "img/docusaurus-social-card.jpg",
        navbar: {
            logo: {
                alt: "Orcfax Logo",
                src: "img/orcfax-logo-horizontal.png",
                href: "/",
            },
            items: [
                {
                    to: "https://orcfax.io",
                    position: "right",
                    label: "Home",
                },
                {
                    to: "https://explorer.orcfax.io",
                    position: "right",
                    label: "Explorer",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [],
            copyright: `Copyright © ${new Date().getFullYear()} Orcfax Ltd.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
