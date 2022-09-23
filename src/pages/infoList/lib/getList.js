/**
 * 获取页面list
 * @returns 返回页面list 房屋出售
 */
import Taro from "@tarojs/taro"
import erMarket from '../../../mockData/erMarket.js'
 
export function GetList() {
    let data = []
    let res = erMarket
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