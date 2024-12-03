import {hopeTheme} from "vuepress-theme-hope";
import navbar from "./navbar.js";
import {sidebar} from "./sidebar.js";

export default hopeTheme({
    hotReload: true, //热重载

    // hostname: "https://golang.halfiisland.com/",
    // author: {
    //     name: "寒江蓑笠翁",
    //     url: "https://246859.github.io/",
    //     email: "2633565580@qq.com"
    // },
    iconAssets: "iconify",
    // 主题色
    themeColor: true,
    // sidebarSorter: ["filename", "order", "date", "readme"],
    // logo
    logo: "/logo.png",
    favicon: "/logo.png",
    // 仓库
    // repo: "Open-Source-CQUT/Golang-Doc",
    // 版权
    // copyright: "MIT Licensed | Copyright © 2021-present 寒江",
    // 是否展示脚注
    displayFooter: false,
    // 仓库中的文件夹
    docsDir: "/src",
    // 导航栏
    navbar: navbar,
    // 侧边栏
    sidebar: sidebar,

    // page meta
    // metaLocales: {
    //     editLink: "在 GitHub 上编辑此页",
    // },

    editLink: false,

    // 加密配置
    // encrypt: {
    //   config: {
    //     "/Book/Gitbook": ["abc", "123"],
    //   }
    // },


    plugins: {
        git: true,
        // autoCatalog: true,
        readingTime: {
            wordPerMinute: 150
        },
        // 代码主题
        shiki: {
            // theme: "github-dark-default",
        },
        // markdown增强
        mdEnhance: {          // https://theme-hope.vuejs.press/zh/config/plugins/md-enhance.html#include
            align: true,        // 是否启用自定义对齐格式支持。
            attrs: true,
            chart: true,        // 是否启用图表支持。
            // codetabs: true,  // @vuepress/plugin-markdown-tab
            // container: true,
            demo: true,
            echarts: true,
            // figure: true,    // Deprecated
            flowchart: true,
            gfm: true,
            // imgLazyload: true, // Deprecated
            // imgSize: true,
            include: true,
            // katex: true,     // Deprecated
            mark: true,
            mermaid: true,
            playground: {
                presets: ["ts", "vue"],
            },
            // presentation: {
            //   plugins: ["highlight", "math", "search", "notes", "zoom"],
            // },
            stylize: [
                {
                    matcher: "Recommended",
                    replacer: ({tag}) => {
                        if (tag === "em")
                            return {
                                tag: "Badge",
                                attrs: {type: "tip"},
                                content: "Recommended",
                            };
                    },
                },
            ],
            sub: true,
            sup: true,
            // tabs: true,    // Deprecated
            vPre: true,
            vuePlayground: false,
        },
    },
});
