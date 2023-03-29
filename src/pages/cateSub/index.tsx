import { Component } from 'react'
import { View, ScrollView, Text } from '@tarojs/components'
import './index.scss'

import Taro, {getCurrentInstance} from '@tarojs/taro'

// 组件
import Tab from '../../components/Cate/Tab'
import ItemList from '../../components/common/ItemList'

// 方法
import { getWindowHeight } from '@/utils/style'
import { getCateSub } from './lib/getCateSub'

export default class CateSub extends Component {

  $instance = getCurrentInstance()

  state = {
    options: null, // 路由参数
    current: 0,
    subMenu: [], // 顶部tabmenu
    itemList: [], // 类别商品列表
  }
  componentWillMount() {
    // 获取路由参数
    const options = this.$instance.router.params
    const {subMenu, itemList} = getCateSub(options.id, '')
    this.setState({
      options,
      subMenu,
      itemList
    })
    Taro.setNavigationBarTitle({title: options.text})
  }

  componentDidMount() {
    // 
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  // 切换tab标题
  handleMenu (index, subid) {
    const { current, options } = this.state;
    if (current != index) {
      this.setState({
        current: index
      })
      getCateSub(options.id, subid)
    }
  }

  render() {
    const { subMenu, current, itemList } = this.state
    const height = getWindowHeight(false)

    return (
      <View className='cate-sub'>
        <View className='cate-sub__menu'>
          <Tab
            list={subMenu}
            current={current}
            onChange={this.handleMenu.bind(this)}
          />
        </View>

        <ScrollView
          scrollY
          className='cate-sub__list'
          style={{ height }}
        >
          <ItemList  list={itemList} />
          <View className='cate-sub__list-tip'>
            <Text className='cate-sub__list-tip-txt'>横向滑动切换其他分类</Text>
          </View>
        </ScrollView>

      </View>
    )
  }
}
