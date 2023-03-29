/**
 * 获取页面list
 * @returns 返回页面list 房屋出售
 */
 import Taro from "@tarojs/taro"
 import cateSub from '../../../mockData/cateSub'
 
 export function getCateSub(categoryL1Id, categoryL2Id) {
     let data = {}
     let res = cateSub
     const {code, msg} = res
     if (code == 0) {
        const {categoryL2List, itemList} = res.data
        data = {
            subMenu: categoryL2List,
            itemList: itemList
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