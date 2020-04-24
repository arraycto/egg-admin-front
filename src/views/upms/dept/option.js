export const tableOption = {
  rowKey: "_id",
  align: "center",
  index: true,
  column: [
    {
      label: "上级部门",
      prop: "parentName",
      hide: true,
      formslot: true,
      span: 24
    },
    {
      label: "父节点ID",
      prop: "parentId",
      hide: true,
      display: false,
      value: "0",
      rules: [
        {
          required: true,
          message: "请选择上级部门",
          trigger: "change"
        }
      ]
    },
    {
      label: "部门名称",
      prop: "name",
      span: 24
    },
    {
      label: "排序",
      prop: "sort",
      type: "number",
      span: 24
    }
  ]
};
