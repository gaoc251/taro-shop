import { Component } from 'react'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

interface propType {
  headImages: [string]
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
    const {headImages} = this.props
    return (
      <View className='header-image'>
        <Swiper className='swiper-header-image' id="swiper-header-image"
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay>

        {headImages && headImages.map(item => {
          return <SwiperItem>
            <Image className='image' src={item} mode="scaleToFill" lazyLoad/>
          </SwiperItem>
        })}

      </Swiper>
      </View>
    )
  }
}
