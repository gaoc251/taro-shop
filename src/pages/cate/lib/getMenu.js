/**
 * 获取页面list
 * @returns 返回页面list 房屋出售
 */
 import Taro from "@tarojs/taro"
 import menu from '../../../mockData/cate'
 
 export function GetMenu(type) {
     let data = []
     let res = menu
     const {code, msg} = res
     if (code == 0) {
        data = translateData(res.data.categoryList)
     } else {
         Taro.showToast({
             title: msg,
             icon: 'none',
             duration: 2000
         })
     }
   
     return data
 }

 // 过滤数据
function translateData (arr) {
    let result = []
    arr.forEach(ele => {
        result.push({
            id: ele.id,
            name: ele.name
        })
    });
    return result
}