import { Component } from 'react'
import { View } from '@tarojs/components'
import './index.scss'

interface propType {
  
}
export default class RequestFail extends Component<propType> {

  componentWillMount () { }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='request-fail'>
        网络异常
      </View>
    )
  }
}
