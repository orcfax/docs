import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    markdown: {
        mermaid: true,
    },
    themes: [
        "@docusaurus/theme-mermaid",
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
            {
                hashed: true,
                indexBlog: false,
                docsRouteBasePath: "/",
            },
        ],
    ],

    title: "Orcfax",
    tagline: "Trustworthy Cardano Oracle",
    url: "https://orcfax.github.io",
    baseUrl: "/",
    favicon: "img/favicon.ico",
    staticDirectories: ["static"],

    // GitHub pages deployment config.
    organizationName: "orcfax",
    projectName: "docs",
    // This needs to be explicit as a config field or environment variable for projects not
    // ending .github.io.
    deploymentBranch: "d2mightysaurus",

    onBrokenLinks: "throw",
    onBrokenAnchors: "throw",
    onBrokenMarkdownLinks: "throw",
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
            integrity:
                "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
            crossorigin: "anonymous",
        },
    ],

    themeConfig: {
        // Replace with your project's social card
        image: "img/docusaurus-social-card.jpg",
        navbar: {
            title: "Orcfax",
            logo: {
                alt: "Orcfax Logo",
                src: "img/orcfax_logo.png",
                href: "/",
                target: "_self",
            },
            items: [
                {
                    href: "https://orcfax.io",
                    position: "right",
                    label: "Home",
                },
                {
                    href: "https://explorer.orcfax.io",
                    position: "right",
                    label: "Explorer",
                },
                {
                    href: "https://status.orcfax.io",
                    position: "right",
                    label: "Status",
                },
            ],
            hideOnScroll: true,
        },
        footer: {
            logo: {
                alt: "Orcfax Logo",
                src: "img/orcfax_logo.png",
                href: "https://orcfax.io",
                height: 100,
                width: 100,
            },
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "Introduction",
                            to: "/",
                        },
                        {
                            label: "FAQ",
                            to: "/oracle-basics",
                        },
                    ],
                },
                {
                    title: "Orcfax",
                    items: [
                        {
                            label: "Home",
                            href: "https://orcfax.io",
                        },
                        {
                            label: "Explorer",
                            href: "https://explorer.orcfax.io",
                        },
                        {
                            label: "Status",
                            href: "https://status.orcfax.io",
                        },
                    ],
                },
                {
                    title: "Community",
                    items: [
                        {
                            label: "Discord",
                            href: "https://discord.com/invite/UbAeRuNzDu",
                        },
                        {
                            label: "X",
                            href: "https://x.com/orcfax",
                        },
                        {
                            label: "Medium",
                            href: "https://medium.com/@orcfax",
                        },
                        {
                            label: "Github",
                            href: "https://github.com/orcfax",
                        },
                    ],
                },
                {
                    title: "Legal",
                    items: [
                        {
                            label: "Terms of Service",
                            to: "/terms-of-service",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Orcfax Ltd.`,
        },
        colorMode: {
            respectPrefersColorScheme: true,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
