/**
 * 获取首页list
 * @returns 返回首页热推列表
 */
import Taro from "@tarojs/taro"
import res from '../../../mockData/msgList'

export function GetMsgList() {
  let data = []

  const {code, msg} = res
  if (code == 0) {
    data = res.data
  } else {
    Taro.showToast({
        title: msg,
        icon: 'none',
        duration: 2000
      })
  }

  return data
}