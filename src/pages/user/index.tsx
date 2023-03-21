import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Button, Image } from '@tarojs/components'
import './index.scss'

import Profile from '../../components/User/Profile/index'
import Menu from '../../components/User/Menu/index'

import {getMenuList} from './lib/getMenuList'
interface stateType {
  menuList: object
}

export default class Index extends Component<any, stateType> {
  constructor (props) {
    super(props)
    this.state = { // 用户信息
      menuList: {}
    }
  }

  componentWillMount () {
    let menu = getMenuList()
    
    this.setState ({
      menuList: menu
    })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const {menuList} = this.state
    return (
      <View className='user-info'>
        {/* 用户信息 */}
        <Profile/>
        {/* 目录 */}
        <Menu menu={menuList} />
      </View>
    )
  }
}
