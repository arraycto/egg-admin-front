import request from "@/plugin/axios";

export function getSysInfo() {
  return request({
    url: "/sys/info"
  });
}
