import store from "@/store";
import axios from "axios";
import { Message } from "element-ui";
import { log, cookies } from "@/libs/util";
import qs from "qs";
// 创建一个错误
function errorCreate(message) {
  const error = new Error(message);
  errorLog(error);
  throw error;
}

// 记录和显示错误
function errorLog(error) {
  // 添加到日志
  store.dispatch("d2admin/log/push", {
    message: "数据请求异常",
    type: "danger",
    meta: {
      error
    }
  });
  // 打印到控制台
  if (process.env.NODE_ENV === "development") {
    log.danger(">>>>>> Error >>>>>>");
    console.log(error);
  }
  // 显示提示
  Message.error(error.response.data.message);
}

// 创建一个 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: process.env.NODE_ENV === "development" ? 15000 : 5000, // 请求超时时间
  withCredentials: true
});

window.axios = service;

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在请求发送之前做一些处理
    const token = cookies.get("token") || "";
    // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    config.headers["Authorization"] = "Bearer " + token;
    if (config.method === "get") {
      // 如果是get请求，且params是数组类型如arr=[1,2]，则转换成arr=1&arr=2
      config.paramsSerializer = function(params) {
        return qs.stringify(params, { arrayFormat: "repeat" });
      };
    }
    return config;
  },
  error => {
    // 发送失败
    console.error(error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    // dataAxios 是 axios 返回数据中的 data
    const dataAxios = response.data;
    // 这个状态码是和后端约定的
    const { code } = dataAxios;
    // 根据 code 进行判断
    if (code === undefined) {
      // 如果没有 code 代表这不是项目后端开发的接口 比如可能是 D2Admin 请求最新版本
      return dataAxios;
    } else {
      // 有 code 代表这是一个后端接口 可以进行进一步的判断
      switch (code) {
        case 0:
          // [ 示例 ] code === 0 代表没有错误
          return dataAxios.data;
        case "xxx":
          // [ 示例 ] 其它和后台约定的 code
          errorCreate(
            `[code:xxx] ${dataAxios.message}: ${response.config.url}`
          );
          break;
        default:
          // 不是正确的 code
          errorCreate(`${dataAxios.message}: ${response.config.url}`);
          break;
      }
    }
  },
  error => {
    const { code } = error.response.data;
    switch (code) {
      case 401:
        Message.error("token已过期，请重新登录");
        setTimeout(() => store.dispatch("d2admin/account/logout"), 3000);
        break;
      default:
        errorLog(error);
        return Promise.reject(error);
    }
  }
);

export default service;
