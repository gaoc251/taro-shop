import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Button, Image } from '@tarojs/components'
import './index.scss'

interface stateType {
  
}

export default class Demo extends Component<any, stateType> {
  constructor (props) {
    super(props)
    this.state = { 
      
    }
  }

  componentWillMount () {
  
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='demo'>
        坎坎坷坷
        <View className='iconfont icon-taro-WIFI'></View>
      </View>
    )
  }
}
