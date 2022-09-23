import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, } from '@tarojs/components'
import './index.scss'

// 组件
import ListItemMsg from '@/components/ListItemMsg'

// 方法
import {GetList} from './lib/getList'

// interface
import {ListDataItem} from '@/interface/listDataItem'

interface stateType {
  routerParams: any
  listData: ListDataItem[]
}

let titleArr = {
  erMarket: '二手市场',
  jop: '求职招聘',
  shopTrends: '商家动态',
  houseRent: '房源出租',
  xiaoquQuestions: '小区问答',
  contactUs: '联系我们'
}

export default class Index extends Component<any, stateType> {
  constructor (props) {
    super(props)
    this.state = { 
      routerParams: Taro.getCurrentInstance().router?.params, // 路由参数
      listData: []
    }
  }

  componentWillMount () {
    this.setState({
      listData: GetList()
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

  render () {
    const {routerParams, listData} = this.state
     return (
      <View className='info-list'>
        {titleArr[routerParams.type]}
        {listData && listData.map((item, index) => {
          return <ListItemMsg item={item} key={index}/>
        })}
      </View>
    )
  }
}
