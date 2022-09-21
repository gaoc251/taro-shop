import { Component } from 'react'
import { View, Swiper, SwiperItem } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

import ListItemMsg from '@/components/ListItemMsg'
interface propType {
  // isFixTop: boolean
  listData: Array<[]>
}
export default class List extends Component<propType> {

  componentWillMount () { }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const {listData} = this.props
    console.log("this.props", this.props)
    return (
      <View className='filter'>
        {listData && listData.map((item, index) => {
          return <ListItemMsg item={item} />
        })}
      </View>
    )
  }
}
