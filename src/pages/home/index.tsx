import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, ScrollView, Icon } from '@tarojs/components'
import './index.scss'

// 组件
import Recommend from '@/components/Home/Recommend'
import Pintuan from '@/components/Home/Pintuan'
import IconConfig from '@/components/Home/IconConfig'

// 方法
import { getWindowHeight } from '@/utils/style'
import { GetRecommendList } from './lib/GetRecommendList'
import { GetPintuanList } from './lib/GetPintuanList'
import { GetIconConfig } from './lib/GetIconConfig'

export default class Home extends Component {
  $instance = Taro.getCurrentInstance()
  state = {
    recommendList: [], // 推荐列表
    pintuanList: [], // 拼团列表
    iconConfig: [], // 图标列表
  }
  componentWillMount() {
    this.setState({
      recommendList: GetRecommendList(),
      pintuanList: GetPintuanList(),
      iconConfig: GetIconConfig ()
    })
  }

  componentDidMount() {}

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const height = getWindowHeight(false)
    const { recommendList, pintuanList, iconConfig } = this.state
    
    return (
      <View className='home'>
        <ScrollView
          scrollY
          className='home__wrap'
          onScrollToLower={this.loadRecommend}
          style={{ height: height }}
        >
          {/* 图标 */}
          {/* <IconConfig list={iconConfig}/> */}
          {/* 拼团 */}
          <Pintuan list={pintuanList}/>
          {/* 为你推荐 */}
          <Recommend list={recommendList} />
        </ScrollView>
      </View>
    )
  }
}
