import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "pusher",
  description: "pusher-简单好用的推送工具",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      // { text: "快速上手", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "使用方法",
        items: [
          { text: "快速上手", link: "/quick-start" },
          { text: "字符串模板", link: "/string-template" },
        ],
      },
      {
        text: "自定义",
        items: [{ text: "部署", link: "/deploy" }],
      },
    ],

    // socialLinks: [
    //   { icon: "github", link: "https://github.com/kentxxq/pusher-docs" },
    //   { icon: "github", link: "https://github.com/kentxxq/pusher-docs" },
    //   { icon: "github", link: "https://github.com/kentxxq/pusher-docs" },
    // ],
  },
});
