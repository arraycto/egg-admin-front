import request from "@/plugin/axios";

// 获取字典列表
export function getList(params) {
  return request({
    url: "/dict/list",
    params
  });
}

export function getInfo(id) {
  return request({
    url: `/dict/${id}`
  });
}

export function create(data) {
  return request({
    url: "/dict",
    method: "post",
    data
  });
}

export function update(data) {
  return request({
    url: "/dict",
    method: "put",
    data
  });
}

export function remove(id) {
  return request({
    url: "/dict/" + id,
    method: "delete"
  });
}

export function removes(data) {
  return request({
    url: "/dict",
    method: "delete",
    data
  });
}
