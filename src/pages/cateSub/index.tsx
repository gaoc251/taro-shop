import { Component } from 'react'
import { View, ScrollView } from '@tarojs/components'
import './index.scss'

import Taro, {getCurrentInstance} from '@tarojs/taro'

// 组件


// 方法


export default class CateSub extends Component {

  $instance = getCurrentInstance()

  state = {
    options: {}, // 路由参数
  }
  componentWillMount() {
    // 获取路由参数
    const options = this.$instance.router.params
    this.setState({options})
    Taro.setNavigationBarTitle({title: options.text})
  }

  componentDidMount() {
    // 
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const {  } = this.state

    return (
      <View className='cate-sub'>
        1111
      </View>
    )
  }
}
