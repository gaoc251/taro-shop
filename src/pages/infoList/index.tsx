import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, } from '@tarojs/components'
import './index.scss'
import classNames from 'classnames'

// 组件
import ListItemMsg from '@/components/ListItemMsg'

// 方法
import {GetList} from './lib/getList'

// interface
import {ListDataItem} from '@/interface/listDataItem'

interface stateType {
  routerParams: any
  listData: ListDataItem[]
  activeIndex: number 
}

let titleArr = {
  erMarket: '二手市场',
  jop: '求职招聘',
  shopTrends: '商家动态',
  houseRent: '房源出租',
  xiaoquQuestions: '小区问答',
  contactUs: '联系我们'
}

let filterType = {
  //
  erMarket: [{
    text: '全部',
    key: '0'
  }, {
    text: '出售',
    key: '1'
  }, {
    text: '求购',
    key: '2'
  }]
}

export default class Index extends Component<any, stateType> {
  constructor (props) {
    super(props)
    this.state = { 
      routerParams: Taro.getCurrentInstance().router?.params, // 路由参数
      listData: [],
      activeIndex: 0 // tab选项索引
    }
  }

  componentWillMount () {
    this.setState({
      listData: GetList(this.state.routerParams.type)
    })
  }

  componentDidMount () {
    Taro.setNavigationBarTitle({
      title: titleArr[this.state.routerParams.type]
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // 切换tab
  changeIndex (index) {
    this.setState({
      activeIndex: index
    })
  }

  render () {
    const {routerParams, listData, activeIndex} = this.state
     return (
      <View className='info-list'>
        {titleArr[routerParams.type]}
        <View className='filter-type'>
          {filterType[routerParams.type].map((item, index) => {
            return <View className={classNames('item', activeIndex == index?'active':'')} key={item} onClick={this.changeIndex.bind(this, index)}>{item.text}</View>
          })}
        </View>
        
        {listData && listData.map((item, index) => {
          return <ListItemMsg item={item} key={index}/>
        })}
      </View>
    )
  }
}
