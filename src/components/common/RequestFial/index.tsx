import { Component } from 'react'
import { View } from '@tarojs/components'
import './index.scss'

interface propType {
  
}
export default class RequestFail extends Component<propType, any> {

  constructor (props) {
    super(props)
    this.state = { 
      color: '#bfbfbf'
    }
  }

  componentWillMount () { }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { color } = this.state
    return (
      <View className='request-fail'>
        <View className='iconfont icon-taro-WIFI1 fail' style={{color: color}}></View>
        <View className='font' style={{color: color}}>网络无连接，请检查网络</View>
      </View>
    )
  }
}
