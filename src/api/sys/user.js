import request from "@/plugin/axios";

export function getCurrent() {
  return request({
    url: "/user/current"
  });
}

export function getInfo(id) {
  return request({
    url: `/user/${id}`
  });
}

export function create(data) {
  return request({
    url: "/user",
    method: "post",
    data
  });
}

export function update(data) {
  return request({
    url: "/user",
    method: "put",
    data
  });
}
