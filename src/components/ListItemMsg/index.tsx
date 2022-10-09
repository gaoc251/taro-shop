import { Component } from 'react'
import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

import {ListDataItem} from '@/interface/listDataItem'
interface propType {
  item: ListDataItem
}
export default class ListItemMsg extends Component<propType> {

  componentWillMount () { }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  jumpDetail (item) {
    Taro.redirectTo({
      url: `../../pages/detail/index?infoId=${item.id}`
    })
  }

  render () {
    const { item } = this.props
    return (
      <View className='list-item-msg' onClick={this.jumpDetail.bind(this, item)}>
        <View className='item-title'>{item.title}</View>
        <View className='item-pics'>
          {item.pics && item.pics.map(img => {
            return <Image className='pic' src={img} mode="aspectFill"/>
          })}
        </View>
        <View className='item-bottom'>
          <View className='click-info'>{item.userName}-{item.click}阅读</View>
          <View className='publish-date'>{item.publish_time}</View>
        </View>
      </View>
    )
  }
}
