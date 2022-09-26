import { createSelectorQuery, General } from '@tarojs/taro'

export type BoundingClientRectCallbackResult = {
    /** 节点的下边界坐标 */
    bottom: number
    /** 节点的 dataset */
    dataset: General.IAnyObject
    /** 节点的高度 */
    height: number
    /** 节点的 ID */
    id: string
    /** 节点的左边界坐标 */
    left: number
    /** 节点的右边界坐标 */
    right: number
    /** 节点的上边界坐标 */
    top: number
    /** 节点的宽度 */
    width: number
}

/** 获取dom元素的信息 */
const getEleInfo = (selector: string): Promise<BoundingClientRectCallbackResult[] | null> => {
    return new Promise(resolve => {
      const query = createSelectorQuery()
      query.select(selector).boundingClientRect()
      query.exec(res => {
        // console.log('res: ', res);
        resolve(res)
      })
    })
  }
  
export default getEleInfo