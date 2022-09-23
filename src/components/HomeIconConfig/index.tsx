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
    /**
     * 路由参数
     * type: 
     * contactUs：联系我们
     * xiaoquQuestions：小区问答
     * houseRent：房源出租
     * shopTrends：商家动态
     * jop：求职招聘
     * erMarket：二手市场
     */
    Taro.redirectTo({
      url: item.jumpAction
    })
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
