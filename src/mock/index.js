import Mock from "./util";

Mock.post(/api\/account\/login/, {
  token: "token",
  info: {
    username: "admin"
  }
});

Mock.get(/api\/sys\/info/, {
  data: {
    操作系统: "Windows 10.0.17763",
    系统架构: "x64",
    主机名: "DESKTOP",
    系统环境: "node.js 12.16.2",
    运行时间: "0秒",
    CPU核心数: 12,
    系统内存: "16GB",
    已用内存: "12GB",
    剩余内存: "4GB"
  }
});

const menus = [
  {
    cache: false,
    children: [
      {
        cache: true,
        children: [],
        component: "admin/navmenu",
        createTime: "2018-12-29 06:19:46",
        icon: "bars",
        name: "navmenu",
        parentId: "5d2d6d6814bc421d10003a55",
        path: "/admin/menu",
        permissions: "",
        sort: 1,
        title: "菜单管理",
        type: "0",
        updateBy: "admin",
        updateTime: "2020-04-30 16:26:42",
        _id: "5d2e832314bc4247ac006727"
      }
    ],
    component: "Layout",
    createTime: "2018-12-29 06:19:47",
    icon: "cog",
    name: "admin",
    parentId: "0",
    path: "/admin",
    permissions: "",
    sort: 1,
    title: "系统设置",
    type: "0",
    updateBy: "admin",
    updateTime: "2020-05-07 09:36:05",
    _id: "5d2d6d6814bc421d10003a55"
  }
];

Mock.get(/api\/menu\/nav\/get/, menus);
Mock.get(/api\/menu/, { data: menus });
Mock.post(/api\/menu/);
Mock.put(/api\/menu/);
Mock.delete(/api\/menu/);
