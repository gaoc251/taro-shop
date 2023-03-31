/**
 * 获取页面list
 * @returns 返回页面list 房屋出售
 */
 import Taro from "@tarojs/taro"
 import cateInfo from '../../../mockData/cart'
 
 export function getCartInfo(openID) {
     let data = {}
     let res = cateInfo
     const {code, msg} = res
     if (code == 0) {
        const {cartGroupList, cartLimitList, priceDetailBanner} = res.data
        data = {
            cartGroupList,
            cartLimitList,
            priceDetailBanner
        }
     } else {
         Taro.showToast({
             title: msg,
             icon: 'none',
             duration: 2000
         })
     }
   
     return data
}