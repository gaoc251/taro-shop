import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import './index.scss'

// 组件
import InfoBase from '@/components/DetailGoods/InfoBase'
import InfoParam from '@/components/DetailGoods/InfoParam'
import HeaderImage from '@/components/DetailGoods/HeaderImage'
import Footer from '@/components/DetailGoods/Footer'
import ToolTipAddMyMp from '@/components/common/ToolTipAddMp'
import Popup from '@/components/common/Popup'
import SpecList from '@/components/DetailGoods/SpecList'

// 方法
import { getWindowHeight } from '@/utils/style'
import { GetDetailGoods } from './lib/getDetail'

export default class DetailGoods extends Component {
  $instance = Taro.getCurrentInstance()
  state = {
    itemId: 0, // 商品ID
    itemInfo: {}, // 商品详情
    visible: false, // 购买弹框是否展示
    selected: {}, // 选择的型号对象
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

  // 购买
  handleBuy () {
    const { visible } = this.state
    this.toggleVisible()
  }

  // 购买窗口关闭事件
  toggleVisible () {
    this.setState({
      visible: !this.state.visible,
      selected: {}
    })
  }

  // 选择的型号
  handleSelect (selected) {
    this.setState({selected})
  }

  render() {
    const height = getWindowHeight(false)
    const { itemInfo, visible } = this.state
    
    return (
      <View className='detail-goods'>
        <ToolTipAddMyMp />
        <ScrollView
          scrollY
          className='detail-goods__wrap'
          style={{ height }}
        >
          <HeaderImage imgList={itemInfo.imgList} />
          <InfoBase itemInfo={itemInfo} />
          <InfoParam attrList={itemInfo.attrList} />
        </ScrollView>

        <Popup visible={visible} onClose={this.toggleVisible}>
          <SpecList specList={itemInfo.specList} primaryPicUrl={itemInfo.primaryPicUrl} activityPrice={itemInfo.activityPrice} retailPrice={itemInfo.retailPrice} skuMap={itemInfo.skuMap} selected={this.state.selected} onSelect={this.handleSelect.bind(this)}/>
        </Popup>

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

        <Footer onAdd={this.handleBuy.bind(this)} />
      </View>
    )
  }
}
