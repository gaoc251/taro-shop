import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import './index.scss'

// 组件
import InfoBase from '@/components/DetailGoods/InfoBase'

// 方法
import { getWindowHeight } from '@/utils/style'
import { GetDetailGoods } from './lib/getDetail'

export default class DetailGoods extends Component {
  $instance = Taro.getCurrentInstance()
  state = {
    itemId: 0, // 商品ID
    itemInfo: {}, // 商品详情
  }
  componentWillMount() {
    let infoId = parseInt(this.$instance.router.params.infoId)
    this.setState({
      itemId: infoId,
      itemInfo: GetDetailGoods(infoId)
    })
  }

  componentDidMount() {}

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const height = getWindowHeight(false)
    const { itemInfo } = this.state
    
    return (
      <View className='detail-goods'>
       sssss
       <ScrollView
          scrollY
          className='item__wrap'
          style={{ height }}
        >
          {/* <Gallery list={gallery} /> */}
          <InfoBase itemInfo={itemInfo} />
          {/* <InfoParam list={itemInfo.attrList} /> */}
          {/* <Detail html={itemDetail.detailHtml} /> */}
        </ScrollView>

        {/* NOTE Popup 一般的实现是 fixed 定位，但 RN 不支持，只能用 absolute，要注意引入位置 */}
        {/* <Popup
          visible={this.state.visible}
          onClose={this.toggleVisible}
          compStyle={popupStyle}
        >
          <Spec
            data={itemInfo}
            selected={this.state.selected}
            onSelect={this.handleSelect}
          />
        </Popup> */}

        {/* <View className='item__footer'>
          <Footer onAdd={this.handleAdd} />
        </View> */}
      </View>
    )
  }
}