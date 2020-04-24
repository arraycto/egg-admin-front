import request from "@/plugin/axios";

// 获取列表
export function getList(params) {
  return request({
    url: "/test",
    params
  });
}

// 获取单条信息
export function getInfo(id) {
  return request({
    url: `/test/${id}`
  });
}

// 新增
export function create(data) {
  return request({
    url: "/test",
    method: "post",
    data
  });
}

// 修改
export function update(data) {
  return request({
    url: "/test",
    method: "put",
    data
  });
}

// 删除单个
export function remove(id) {
  return request({
    url: `/test/${id}`,
    method: "delete"
  });
}

// 批量删除
export function removes(data) {
  return request({
    url: "/test",
    method: "delete",
    data
  });
}
