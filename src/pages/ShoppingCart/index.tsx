import { Component } from 'react'
import { View, ScrollView, Text } from '@tarojs/components'
import './index.scss'

import Taro from '@tarojs/taro'

// 组件
import Empty from '@/components/Cart/Empty'
import ButtonItem from '@/components/common/ButtonItem'
import CartList from '@/components/Cart/List'

// 方法
import {handleLogin} from "@/utils/util"
import { getCartInfo } from "./lib/getCartInfo"

export default class ShoppingCart extends Component {

  state = {
    loginState: false, // 登录态
    cartGroupList: [], // 购物车
    cartLimitList: [], // 失效商品
    priceDetailBanner: {}, // 底部价格详情
  }
  componentWillMount() {
    //获取openID ,先写个假的吧
    const cartInfo = getCartInfo ("11111")
    const { cartGroupList, cartLimitList, priceDetailBanner } = cartInfo
    this.setState({
      cartGroupList, cartLimitList, priceDetailBanner
    })
  }

  componentDidMount() {
    // 
  }

  componentWillUnmount() { }

  componentDidShow() { 
    let _userInfo = Taro.getStorageSync('userInfo')
    
    this.setState({
      loginState: Object.keys(_userInfo).length > 0
    })
  }

  componentDidHide() { }

  toLogin = () => {
    handleLogin((userInfo)=>{
      console.log("userInfo", userInfo)
    })
  }

  render() {

    const { loginState, cartGroupList } = this.state
   
    return (
      <View className='cart'>
        {loginState && cartGroupList.length == 0 && <Empty />}
        {loginState && cartGroupList.length != 0 && <View>
          已登录-展示购物车吧
          <CartList list={cartGroupList}/>
        </View>}

        {!loginState && <View className='cart__not-login'>
          <Empty text='未登陆' />
          <View className='cart__login'>
            <ButtonItem
              type='primary'
              text='登录'
              onClick={this.toLogin}
              compStyle={{
                background: '#b59f7b',
                borderRadius: Taro.pxTransform(4)
              }}
            />
          </View>
        </View>}
      </View>
    )
  }
}
