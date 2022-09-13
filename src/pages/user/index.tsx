import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Button, Image } from '@tarojs/components'
import './index.scss'

interface stateType {
  userInfo: {
    avatarUrl: string // 头像
    nickName: string
  },
  showGetUserInfo: boolean // 是否展示授权用户信息
}

export default class Index extends Component<any, stateType> {
  constructor (props) {
    super(props)
    this.state = { // 用户信息
      userInfo: {
        avatarUrl: '',
        nickName: ''
      }, 
      showGetUserInfo: false
    }
  }

  componentWillMount () {
    let userInfo = Taro.getStorageSync('userInfo')
    this.setState ({
      showGetUserInfo: !Boolean(userInfo)
    })
  }

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
    let self = this
    Taro.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log("getUserProfile", res)
        Taro.setStorage({
          key: "userInfo",
          data: res.userInfo
        })
        self.setState ({
          userInfo: res.userInfo
        })
      }
    })
  }

  render () {
    const {userInfo, showGetUserInfo} = this.state
    return (
      <View className='user-info'>
        <View className='login-btn' onClick={this.getLogin}>登录</View>
        {showGetUserInfo && <View className='login-btn' onClick={this.getUserInfo.bind(this)}>获取用户信息</View>}
        <View className='user-content'>
          <Image src={userInfo.avatarUrl}></Image>
          <View className=''>{userInfo.nickName}</View>
        </View>
      </View>
    )
  }
}
