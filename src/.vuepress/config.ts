import {defineUserConfig} from "vuepress";
import theme from "./theme.js";
import {searchProPlugin} from "vuepress-plugin-search-pro";
import {componentsPlugin} from "vuepress-plugin-components";

export default defineUserConfig({
  // base: "/",
  lang: "zh-CN",
  title: "技术笔记",
  description: "",
//     head: [
//         [
//             "script", {},
//             `var _hmt = _hmt || [];
// (function() {
//   var hm = document.createElement("script");
//   hm.src = "https://hm.baidu.com/hm.js?87d678935e4b33455c0390543e7a759d";
//   var s = document.getElementsByTagName("script")[0];
//   s.parentNode.insertBefore(hm, s);
// })();`
//         ]
//     ],
  theme,
  port: 8090,
  shouldPrefetch: false,
  pagePatterns: [
    "**/*.md",
    "!**/*.snippet.md",
    "!.vuepress",
    "!node_modules",
  ],
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true
    }),
  ]
});
