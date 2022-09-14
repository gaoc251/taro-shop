import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

// 组件
export default class Index extends Component {

  state = {
    isFixTop: false, // 是否吸顶，默认false
  }
  componentWillMount () { }

  componentDidMount () { 
    // 
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { isFixTop } = this.state
    return (
      <View className='index'>
        添加商品
      </View>
    )
  }
}
