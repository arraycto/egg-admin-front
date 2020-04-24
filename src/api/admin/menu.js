import request from "@/plugin/axios";

// 获取导航菜单
export function getMenu() {
  return request({
    url: "/menu/nav"
  });
}

// 获取权限
export function getPermissions() {
  return request({
    url: "/menu/permissions"
  });
}

// 获取菜单管理列表
export function getList(params) {
  return request({
    url: "/menu/list",
    params
  });
}

export function getInfo(id) {
  return request({
    url: `/menu/${id}`
  });
}

export function create(data) {
  return request({
    url: "/menu",
    method: "post",
    data
  });
}

export function update(data) {
  return request({
    url: "/menu",
    method: "put",
    data
  });
}

export function remove(id) {
  return request({
    url: "/menu/" + id,
    method: "delete"
  });
}

export function removes(data) {
  return request({
    url: "/menu",
    method: "delete",
    data
  });
}
