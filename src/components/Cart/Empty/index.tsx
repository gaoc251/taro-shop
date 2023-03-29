import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import empty from './assets/empty.png'
import './index.scss'

export default class Empty extends Component {
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
