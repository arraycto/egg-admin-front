// 菜单 侧边栏
export default [
  { path: "/index", title: "首页", icon: "home" },
  {
    title: "页面",
    icon: "folder-o",
    children: [
      {
        path: "/page1",
        title: "页面 1",
        name: "page1",
        children: [
          {
            path: "/page2",
            title: "页面 2",
            name: "page2"
          }
        ]
      },
      { path: "/page3", title: "页面 3", name: "page3" }
    ]
  }
];
