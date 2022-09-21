import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

// 组件
import HeaderImage from '@/components/HeaderImage/index'
import HomeIconConfig from '@/components/HomeIconConfig/index'
import Filter from '@/components/Filter'
import List from '@/components/List'

// 方法
import {GetShopList} from './lib/GetShopList'
export default class Index extends Component {

  state = {
    isFixTop: false, // 是否吸顶，默认false
  }
  componentWillMount () {
    GetShopList ()
  }

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
        <HeaderImage isFixTop={ isFixTop }/>
        <HomeIconConfig></HomeIconConfig>
        <Filter />
        <List />
      </View>
    )
  }
}
