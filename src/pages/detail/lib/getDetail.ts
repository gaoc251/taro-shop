/**
 * 获取页面list
 * @returns 返回页面页面详情
 */
 import Taro from "@tarojs/taro"
 import res from '../../../mockData/marketDetail'
 
 export function GetDetail(type) {
     let data 
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