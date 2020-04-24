import request from "@/plugin/axios";

// 获取列表
export function getList(params) {
  return request({
    url: "/role",
    params
  });
}

// 获取单条信息
export function getInfo(id) {
  return request({
    url: `/role/${id}`
  });
}

// 新增
export function create(data) {
  return request({
    url: "/role",
    method: "post",
    data
  });
}

// 修改
export function update(data) {
  return request({
    url: "/role",
    method: "put",
    data
  });
}

// 删除单个
export function remove(id) {
  return request({
    url: `/role/${id}`,
    method: "delete"
  });
}

// 批量删除
export function removes(data) {
  return request({
    url: "/role",
    method: "delete",
    data
  });
}
