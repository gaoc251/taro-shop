import { Component } from 'react'
import { View, Swiper, SwiperItem } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

import ListItemMsg from '@/components/ListItemMsg'
interface propType {
  listData: [{
    title: string
    pics: [string]
    publish_time: string
    click: string
    userName: string
  }]
}
export default class List extends Component<propType> {

  componentWillMount () { }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const {listData} = this.props
    return (
      <View className='list'>
        {listData && listData.map((item, index) => {
          return <ListItemMsg item={item} key={index} />
        })}
      </View>
    )
  }
}
