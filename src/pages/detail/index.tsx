import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'

// 方法
import {GetDetail} from './lib/getDetail'

interface stateType {
  routerParam: any
  detailData: {
    title?: string
    user?: {
      userName: string
      publish_time: string
    }
    infos?: {
      tel: string
      tips: string
      pics: [string]
      content: string
    }
  }
}

export default class Detail extends Component<any, stateType> {
  constructor (props) {
    super(props)
    this.state = { 
      routerParam: Taro.getCurrentInstance().router?.params, // 路由参数
      detailData: {}, // 详情页数据
    }
  }

  componentWillMount () {
    const {infoId} = this.state.routerParam
    this.setState({
      detailData: GetDetail(infoId)
    })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const {detailData} = this.state
    console.log("detailData", detailData)
    return (
      <View className='detail'>
        
        <View className='title'>{detailData.title}</View>
        <View className='user'>
          <View className='name'>{detailData.user?.userName}</View>
          <View className='pb-time'>{detailData.user?.publish_time}</View>
        </View>
        <View className='info'>
          <View className='tel'>{detailData.infos?.tel}</View>
          <View className='tips'>{detailData.infos?.tips}</View>
          <View className='content'>{detailData.infos?.content}</View>
          <View className='pics'>
            {detailData.infos?.pics.map(item => {
              return <Image src={item} key={item} />
            })}
          </View>
        </View>
      </View>
    )
  }
}
