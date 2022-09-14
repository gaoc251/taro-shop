import { Component } from 'react'
import { View, Swiper, SwiperItem } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

interface propType {
  // isFixTop: boolean
}
export default class List extends Component<propType> {

  componentWillMount () { }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='filter'>
        列表
      </View>
    )
  }
}
