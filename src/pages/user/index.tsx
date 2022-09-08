import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // 登录
  getLogin () {
    Taro.login({
      success: loginres => {
        if (loginres.code) {
          Taro.getUserInfo({
            success: user => {
              Taro.request({
                url: 'http://127.0.0.1:8080/wxLogin', //仅为示例，并非真实的接口地址
                method: "GET",
                data: {
                  code: loginres.code,
                  encryptedData: user.encryptedData,
                  iv: user.iv
                },
                success: function (res) {
                  console.log(res.data)
                }
              })              

            }
          })
        }

      }
    })
  }

  // 获取用户信息
  getUserInfo () {
    Taro.getUserInfo({
      success: function(res) {
        console.log("res",res)
      }
    })
    Taro.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log("getUserProfile", res)
      }
    })
  }

  render () {
    return (
      <View className='user-info'>
        <View className='login-btn' onClick={this.getLogin}>登录</View>
        <View className='login-btn' onClick={this.getUserInfo}>获取用户信息</View>
      </View>
    )
  }
}
