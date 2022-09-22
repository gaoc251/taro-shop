import { Component } from 'react'
import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

interface propType {
  item: {
    title: string
    pics: [string]
    publish_time: string
    click: string
    userName: string
  }
}
export default class ListItemMsg extends Component<propType> {

  componentWillMount () { }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { item } = this.props
    console.log("item", item)
    return (
      <View className='list-item-msg'>
        <View className='item-title'>{item.title}</View>
        <View className='item-pics'>
          {item.pics && item.pics.map(img => {
            return <Image className='pic' src={img} />
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
