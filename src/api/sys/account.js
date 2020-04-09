import request from "@/plugin/axios";

export function login(data) {
  return request({
    url: "/user/login",
    method: "post",
    data
  });
}

export function resetPassword(data) {
  return request({
    url: "/user/password",
    method: "put",
    data
  });
}
