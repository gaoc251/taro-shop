import { Component } from 'react'
import { View, ScrollView } from '@tarojs/components'
import './index.scss'

// 组件
import Menu from '@/components/Cate/Menu/index'
import List from '@/components/Cate/List'

// 方法
import { getWindowHeight } from '@/utils/style'
import { GetMenu } from './lib/GetMenu'

export default class Cate extends Component {

  state = {
    current: -1,
    loaded: false,
    loading: false,
    menu: [], // 左侧目录
    categoryList: [], // 分类列表数据
  }
  componentWillMount() {
    let _categoryList =  GetMenu()
    let menuData = _categoryList.menu
    this.setState({
      menu: menuData,
      current: (menuData && menuData[0].id) || -1,
      categoryList: _categoryList.categoryList
    })
  }

  componentDidMount() {
    // 
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  // 切换目录
  handleMenu = (id) => {
    this.setState({ loading: true }, () => {
      this.setState({ current: id, loading: false })
    })
  }

  render() {
    const height = getWindowHeight()
    const { current, menu, loading, categoryList } = this.state
    const currentCategory = categoryList.find(item => item.id === current) || {}

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

        {/* 通过切换元素实现重置 ScrollView 的 scrollTop */}
        {loading ?
          <View /> :
          <ScrollView
            scrollY
            className='cate__list'
            style={{ height }}
          >
            <View className='cate__list-wrap'>
              <List list={currentCategory.categoryGroupList || []} />
            </View>
          </ScrollView>
        }
        
      </View>
    )
  }
}
