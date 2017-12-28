/**
 * Created by lenovo on 2017/12/4.
 */

const SUCCESSCODE = '000000';
const REPONSE_CODE_LOGIN_INVALID = 'user.invalid'; // 响应编码 - 用户失效
const httpBasePath = 'http://localhost:8089';
let isWexin = null;
let appid = '' //TODO:待申请。
const Utils = {
  SUCCESSCODE: SUCCESSCODE,
  REPONSE_CODE_LOGIN_INVALID: REPONSE_CODE_LOGIN_INVALID,

  /**
   * 把服务名称转成URL
   * @param  {string} serviceName 服务名称
   * @param  {string} serviceType 服务前缀
   * @param  {string} basePath 基本路径
   */
  apiUrl(serviceName, serviceType, basePath) {
    if (!serviceType) {
      serviceType = 'zhiwei-pc';
    }
    return basePath + 'los/' + serviceType + '.' + serviceName;
  },

  /**
   * 请求服务，统一封装，用于之后做一些统一处理
   * @param  {string}   serviceName 服务名称
   * @param  {Object}   params      参数
   * @param  {Function} cb(error, model, resp, textStatus, jqXHR/XMLHttpRequest, errorThrown)
   * @param  {string}   serviceType 服务前缀， 默认zuche-intf-rent
   * @param  {string}   method      默认POST
   * @param  {object}   options         扩展参数
   */
  ajax(url, params, cb, serviceType, method, options) {
    let headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };
    method = method && method.toUpperCase() || 'POST'
    return new Promise(function (resolve, reject) {
      if (method === 'GET') {
        if (params) {
          let paramsArray = [];
          //encodeURIComponent
          Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
          if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&')
          } else {
            url += '&' + paramsArray.join('&')
          }
        }
        fetch(url)
          .then((response) => {
            if (response.responseCode === SUCCESSCODE) {
              resolve(response);
            } else {
              return reject({status: response.status})
            }
          })
          .catch((err) => {
            reject({status: -1});
          })
      } else if (method === 'POST') {
        fetch(url, {
          method: 'POST',
          headers: headers,
          body: params,
        })
          .then((response) => {
            if (response.responseCode === SUCCESSCODE) {
              resolve(response);
            } else {
              reject({status: response.status})
            }
          })
          .catch((err) => {
            reject(err);
          })
      }
    })
  },
  /**
   * 微信授权登录
   * @param  {target}   target 授权完成的回调
   */
  weichatLogin(target) {
    if (!target) {
      target = window.location.href;
    }
    let redirect = encodeURIComponent(httpBasePath + '/los/zhiwei-pc.login') + '?mainUrl=' + encodeURIComponent(target);
    let authUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid + '&redirect_uri=' + redirect + '&response_type=code&scope=snsapi_userinfo,snsapi_base&state=123&connect_redirect=1#wechat_redirect';
    window.location.href = authUrl;
  },
  isWeixin() {
    if (isWexin === null) {
      isWexin = !!navigator.userAgent.match(/MicroMessenger/ig);
    }
    return isWexin;
  },
  isAlipay() {
    let userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.match(/Alipay/i) == "alipay") {
      return true;
    } else {
      return false;
    }
  },

  url2object(str) {
    if (!str) {
      str = window.location.search;
    }

    str = str.substring(1); // 去掉问号

    let keyVals = str.split('&');

    let params = {};

    for (let item of keyVals) {
      let keyValItems = item.split('=');
      if (keyValItems.length !== 2) continue;
      params[keyValItems[0]] = keyValItems[1];
    }

    return params;
  }
};


export default Utils;