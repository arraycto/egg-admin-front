import request from "@/plugin/axios";

// 获取列表
export function getList(params) {
  return request({
    url: "/user",
    params
  });
}

// 获取单条信息
export function getInfo(id) {
  return request({
    url: `/user/${id}`
  });
}

// 新增
export function create(data) {
  return request({
    url: "/user",
    method: "post",
    data
  });
}

// 修改
export function update(id, data) {
  return request({
    url: `/user/${id}`,
    method: "put",
    data
  });
}

// 删除单个或多个
export function remove(ids) {
  return request({
    url: `/user/${ids}`,
    method: "delete"
  });
}

// // 批量删除
// export function removes(data) {
//   return request({
//     url: "/user",
//     method: "delete",
//     data
//   });
// }