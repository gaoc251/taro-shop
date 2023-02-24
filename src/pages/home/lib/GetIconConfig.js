/**
 * 获取商品详情
 * @returns 返回页面list 房屋出售
 */
 import Taro from "@tarojs/taro"
 import iconConfig from '../../../mockData/homeIconConfig'
 
 export function GetIconConfig() {
     let data = {}
     let res = iconConfig
     const {code, msg} = res
     if (code == 0) {
        data = res.data.iconConfig
     } else {
         Taro.showToast({
             title: msg,
             icon: 'none',
             duration: 2000
         })
     }
   
     return data
 }