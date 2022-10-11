import { Component } from 'react'
import { View, Image } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'
import classNames from 'classnames'

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
    headImages:[], // 头图
    filterTop: 0, // 筛选模块距顶部距离
    filterFixTop: false, // 筛选项吸顶吗
  }
  componentWillMount () {
    this.setState({
      msgList:  GetMsgList (),
      homeIcons: GetHomeIconsList ('icons'),
      headImages: GetHomeIconsList ('headImages')
    })
  }

  componentDidMount () { 
    // 计算筛选模块距离顶部高度
    // Taro.nextTick(() => {
    //   Taro.createSelectorQuery().select('#filter-container') .boundingClientRect(res=> { 
    //     this.setState({
    //       filterTop: res.top
    //     })
    //   }).exec()
    // })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleScroll (e) {
    console.log(e.detail)
    let {scrollTop} = e.detail
    this.setState({
      filterFixTop: scrollTop >= this.state.filterTop
    })
  }

  render () {
    const { isFixTop, msgList, homeIcons, filterFixTop, headImages } = this.state
    return (
      <View className='index'>
        <View className='top-bg'>
          <Image className='local-icon' src="../../asset/image/local.png"/>
          万橡悦府一期
        </View>
        <View className='head-image-wrap'>
          <HeaderImage headImages={headImages}/>
        </View>
        <ScrollBanner title={'hello！！！'} speed={80} space={80}/>
        <HomeIconConfig iconConfig={homeIcons} />

        {/* <View id='filter-container' className={classNames('filter-container', filterFixTop?'fixed':'static')}>
          <Filter />
        </View> */}
        
        <List listData={msgList}/>
      </View>
    )
  }
}
