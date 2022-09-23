import { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'
interface propType {
  iconConfig: [{
    text: string
    imgUrl: string
    jumpAction: string
  }]
}
export default class HomeIconConfig extends Component<propType> {

  componentWillMount () { }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  jumpUrl(item) {
    debugger
  }

  render () {
    const { iconConfig } = this.props
    return (
      <View className='home-icons'>
        {iconConfig.map(item => {
          return <View className='icon-item' onClick={this.jumpUrl.bind(this, item)}>
            <Image className='icon-img' src={item.imgUrl} />
            <Text className='icon-text'>{item.text}</Text>
          </View>
        })}
      </View>
    )
  }
}
