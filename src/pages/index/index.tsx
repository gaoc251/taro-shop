import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

// 组件
import HeaderImage from '@/components/HeaderImage/index'
import HomeIconConfig from '@/components/HomeIconConfig/index'
import Filter from '@/components/Filter'
import List from '@/components/List'

// 方法
import {GetMsgList} from './lib/GetMsgList'
import {GetHomeIconsList} from './lib/GetHomeIconsList'

import ScrollBanner from '@/components/ScrollBanner'
export default class Index extends Component {

  state = {
    isFixTop: false, // 是否吸顶，默认false
    msgList: [], // 发布信息列表
    homeIcons: [], // 首页icon配置
  }
  componentWillMount () {
    this.setState({
      msgList:  GetMsgList (),
      homeIcons: GetHomeIconsList ()
    })
  }

  componentDidMount () { 
    // 
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { isFixTop, msgList, homeIcons } = this.state
    return (
      <View className='index'>
        <HeaderImage isFixTop={ isFixTop }/>
        <ScrollBanner title={'hello！！！'} speed={80} space={80}/>
        <HomeIconConfig iconConfig={homeIcons} />
        <Filter />
        <List listData={msgList}/>
      </View>
    )
  }
}
