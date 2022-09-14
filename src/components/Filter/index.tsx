import { Component } from 'react'
import { View, Swiper, SwiperItem } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

interface propType {
  // isFixTop: boolean
}
export default class Filter extends Component<propType> {

  componentWillMount () { }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='filter'>
        筛选
      </View>
    )
  }
}
