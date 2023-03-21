/**
 * 获取页面list
 * @returns 返回页面list 房屋出售
 */
import Taro from "@tarojs/taro"
import res from '../../../mockData/userMenu'

export function getMenuList(type) {
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