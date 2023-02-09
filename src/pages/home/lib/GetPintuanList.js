/**
 * 获取商品详情
 * @returns 返回页面list 房屋出售
 */
 import Taro from "@tarojs/taro"
 import pintuanList from '../../../mockData/homePintuan'
 
 export function GetPintuanList() {
     let data = {}
     let res = pintuanList
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