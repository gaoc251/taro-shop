/**
 * 获取商品详情
 * @returns 返回页面list 房屋出售
 */
 import Taro from "@tarojs/taro"
 import homeRecommendList from '../../../mockData/homeRecommendList'
 
 export function GetRecommendList() {
     let data = {}
     let res = homeRecommendList
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