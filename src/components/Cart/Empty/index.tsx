import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'

import './index.scss'

interface propsType {
  text?: string
}
export default class Empty extends Component<propsType, any> {
  render () {
    return (
      <View className='cart-empty'>
        <View className='cart-empty__img iconfont icon-taro-gouwuche1'></View>
        <Text className='cart-empty__txt'>
          {this.props.text || '去添加点什么吧'}
        </Text>
      </View>
    )
  }
}
