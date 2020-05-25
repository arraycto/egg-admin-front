import store from "@/store";
import { log } from "@/libs/util";

export default {
  install(Vue, options) {
    Vue.config.errorHandler = function(error, instance, info) {
      Vue.nextTick(() => {
        // store 追加 log
        store.dispatch("d2admin/log/push", {
          message: `${info}: ${error.message}`,
          type: "danger",
          meta: {
            error,
            instance
          }
        });
        // 只在开发模式下打印 log
        if (process.env.NODE_ENV === "development") {
          log.capsule("D2Admin", "ErrorHandler", "danger");
          log.danger(">>>>>> 错误信息 >>>>>>");
          console.log(info);
          log.danger(">>>>>> Vue 实例 >>>>>>");
          console.log(instance);
          log.danger(">>>>>> Error >>>>>>");
          console.log(error);
        }
      });
    };
  }
};
