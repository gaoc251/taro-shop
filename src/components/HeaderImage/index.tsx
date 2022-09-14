import { Component } from 'react'
import { View, Swiper, SwiperItem } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

interface propType {
    isFixTop: boolean
}
export default class HeaderImage extends Component<propType> {

  componentWillMount () { }

  componentDidMount () {
    Taro.nextTick(() => {
        const query = Taro.createSelectorQuery()
        query.select('#swiper-header-image').boundingClientRect()
        query.selectViewport().scrollOffset()
        query.exec(res => {
            console.log("#swiper-header-image", res)
            res[1].scrollTop // 显示区域的竖直滚动位置
        })
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='header-image'>
        头图
        <Swiper className='swiper-header-image' id="swiper-header-image"
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay>
        <SwiperItem>
          <View className='demo-text-1'>1</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-2'>2</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-3'>3</View>
        </SwiperItem>
      </Swiper>
      </View>
    )
  }
}
