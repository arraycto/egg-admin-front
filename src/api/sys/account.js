import request from "@/plugin/axios";

export function userLogin(data) {
  return request({
    url: "/user/login",
    method: "post",
    data
  });
}

export function resetPassword(data) {
  return request({
    url: "/user/password/reset",
    method: "put",
    data
  });
}
