import { Component } from 'react'
import { View, ScrollView } from '@tarojs/components'
import './index.scss'

// 组件
import Menu from '@/components/Cate/Menu/index'

// 方法
import { getWindowHeight } from '@/utils/style'
import {GetMenu} from './lib/GetMenu'

export default class Cate extends Component {

  state = {
    current: -1,
    loaded: false,
    loading: false,
    menu: [], // 左侧目录
  }
  componentWillMount () {
    let menuData = GetMenu()
    this.setState({
      menu: menuData,
      current: (menuData && menuData[0].id) || -1
    })
  }

  componentDidMount () { 
    // 
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // 切换目录
  handleMenu = (id) => {
    this.setState({ loading: true }, () => {
      this.setState({ current: id, loading: false })
    })
  }

  render () {
    const height = getWindowHeight()
    const { current, menu } = this.state
    return (
      <View className='cate'>
        <ScrollView
          scrollY
          className='cate__menu'
          style={{ height }}
        >
          <Menu
            current={current}
            list={menu}
            onClick={this.handleMenu}
          />
        </ScrollView>
      </View>
    )
  }
}
