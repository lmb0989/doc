import * as path from "path";
import * as fs from "fs";
import {SidebarItem, SidebarOptions} from "vuepress-theme-hope/lib/shared/sidebar";

export const sidebar: SidebarOptions = [
  // {
  //     text: "Git",
  //     prefix: "/Book/Git/",
  //     // link: "/Git/",
  //     collapsible: true,
  //     children: [
  //         {text: "Gitee", link: "Gitee"},
  //         {text: "GitHub", link: "GitHub"},
  //     ]
  // },
  // {
  //     text: "Gitbook",
  //     prefix: "/Book/Gitbook/",
  //     // link: "/Gitbook/",
  //     collapsible: true,
  //     children: [
  //         {text: "gitbook", link: "gitbook.md"},
  //         {text: "Markdown", link: "Markdown.md"},
  //     ]
  // },
];

let readDir = (dir: string, children: SidebarItem[], isRoot: boolean, prefix: string) => {
  let fileList = fs.readdirSync(dir);
  for (let file of fileList) {
    let filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (!file.startsWith(".")) {
        let currPrefix = `${prefix}${file}/`;
        let option: SidebarItem = {
          text: file,
          prefix: currPrefix,
          collapsible: true,
          children: []
        }
        children.push(option);
        readDir(filePath, option.children, false, currPrefix);
      }
    } else {
      if (file.endsWith(".md") && fs.statSync(filePath).size > 0) {
        let option: SidebarItem = {
          text: file.substring(0, file.indexOf(".md")),       // 文件名，去掉.md
          link: isRoot ? prefix + file : file,
        }
        children.push(option);
      }
    }
  }
}
readDir(path.join(__dirname, "../Book"), sidebar, true, "/Book/");

// console.log("sidebar > ");
// console.log("============");
// console.log(JSON.stringify(sidebar, null, 4));
// console.log("============");