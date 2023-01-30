import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

import RequestFail from '@/components/common/RequestFial'

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
        网络异常
        <RequestFail />
      </View>
    )
  }
}
