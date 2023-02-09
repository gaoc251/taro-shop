import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import './index.scss'

// 组件
import Recommend from '@/components/Home/Recommend'
import Pintuan from '@/components/Home/Pintuan'

// 方法
import { getWindowHeight } from '@/utils/style'
import { GetRecommendList } from './lib/GetRecommendList'
import { GetPintuanList } from './lib/GetPintuanList'

export default class Home extends Component {
  $instance = Taro.getCurrentInstance()
  state = {
    recommendList: [], // 推荐列表
    pintuanList: [], // 拼团列表
  }
  componentWillMount() {
    this.setState({
      recommendList: GetRecommendList(),
      pintuanList: GetPintuanList()
    })
  }

  componentDidMount() {}

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const height = getWindowHeight(false)
    const { recommendList, pintuanList } = this.state
    
    return (
      <View className='home'>
        <ScrollView
          scrollY
          className='home__wrap'
          onScrollToLower={this.loadRecommend}
          style={{ height: height }}
        >
          {/* 拼团 */}
          <Pintuan list={pintuanList}/>
          {/* 为你推荐 */}
          <Recommend list={recommendList} />
        </ScrollView>
      </View>
    )
  }
}
