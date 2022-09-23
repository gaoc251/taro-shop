/**
 * 获取页面list
 * @returns 返回页面list 房屋出售
 */
import Taro from "@tarojs/taro"
import erMarket from '../../../mockData/erMarket.js'
import jops from '../../../mockData/jops'
import shopTrends from '../../../mockData/shopTrends'

export function GetList(type) {
    let data = []
    let res = {}
    switch (type) {
        case 'erMarket':
            res = erMarket
            break;
        case 'jop':
            res = jops
            break;
        case 'shopTrends':
            res = shopTrends
            break;
        default:
            break;
    }
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