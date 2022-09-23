/**
 * 获取首页list
 * @returns 返回首页图标配置
 */
 import Taro from "@tarojs/taro"
 import res from '../../../mockData/homeIcon.js'
 
 export function GetHomeIconsList() {
   let data = []
 
   const {code, msg} = res
   if (code == 0) {
     data = res.data.icons
   } else {
     Taro.showToast({
         title: msg,
         icon: 'none',
         duration: 2000
       })
   }
 
   return data
 }