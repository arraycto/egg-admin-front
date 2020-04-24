export const tableOption = {
  rowKey: "_id",
  align: "center",
  index: true,
  column: [
    {
      label: "上级菜单",
      prop: "parentId",
      hide: true,
      formslot: true,
      span: 24,
      rules: [
        {
          required: true,
          message: "请选择上级菜单",
          trigger: "change"
        }
      ]
    },
    {
      label: "菜单名称",
      prop: "title",
      span: 24,
      rules: [
        {
          required: true,
          message: "请输入菜单名称",
          trigger: "change"
        }
      ]
    },
    {
      label: "图标",
      prop: "icon",
      slot: true,
      formslot: true,
      span: 24
    },
    {
      label: "类型",
      prop: "type",
      type: "select",
      dicData: [
        { label: "菜单", value: "0" },
        { label: "按钮", value: "1" }
      ],
      span: 24,
      rules: [
        {
          required: true,
          message: "请选择类型",
          trigger: "change"
        }
      ]
    },
    {
      label: "路由路径",
      prop: "path",
      span: 24
    },
    {
      label: "前端组件",
      prop: "component",
      span: 24
    },
    {
      label: "组件名",
      prop: "name",
      span: 24
    },
    {
      label: "排序",
      prop: "sort",
      type: "number",
      span: 24
    },
    {
      label: "权限",
      prop: "permissions",
      hide: true,
      span: 24
    },
    {
      label: "路由缓存",
      prop: "cache",
      type: "switch",
      span: 24
    }
  ]
};