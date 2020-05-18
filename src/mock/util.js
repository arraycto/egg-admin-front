import Mock from "mockjs";

const success = {
  result: true,
  code: 0,
  data: {},
  msg: "请求成功"
};

/**
 *  url反序列化
 */
// const deserialize = function(url) {
//   let string = url.split("&");
//   let res = {};
//   for (let i = 0; i < string.length; i++) {
//     let str = string[i].split("=");
//     if (str[0] !== "") {
//       res[str[0]] = str[1];
//     }
//   }
//   return res;
// };

/**
 * @param {String} url 请求地址
 * @param {Array} data 返回的数据列表
 */
Mock.get = (url, data) => {
  return Mock.mock(url, "get", {
    ...success,
    data
  });
};

/**
 * @param {String} url 请求地址
 * @param {Array} data 返回的数据
 */
Mock.post = (url, data) => {
  return Mock.mock(url, "post", opt => {
    // let data = deserialize(opt.body);
    // data.id = new Date().getTime() + "";
    // oData.push(data);

    return {
      ...success,
      data
    };
  });
};

/**
 * @param {String} url 请求地址
 * @param {Array} oData 原始数据列表
 */
Mock.put = (url, oData) => {
  return Mock.mock(url, "put", opt => {
    // let data = deserialize(opt.body);
    // oData.forEach((item, i) => {
    //   if (item.id === data.id) {
    //     oData[i] = data;
    //   }
    // });
    return success;
  });
};

/**
 * @param {String} url 请求地址
 * @param {Array} oData 原始数据列表
 */
Mock.delete = (url, oData) => {
  return Mock.mock(url, "delete", opt => {
    // let ids = opt.url.substr(opt.url.lastIndexOf("/") + 1);
    // oData.forEach((item, i) => {
    //   if (ids.includes(item.id)) {
    //     oData.splice(i);
    //   }
    // });
    return success;
  });
};

export default Mock;
