import { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'

import classNames from 'classnames'
import './index.scss'

import {handleLogin} from "@/utils/util"

interface stateType {
    userInfo: {
        avatarUrl: string
        nickName: string
    },
    defaultAvatar: string
}

export default class Profile extends Component<any, stateType> {

    constructor (props) {
        super(props)
        this.state = { // 用户信息
          userInfo: {
            avatarUrl: '',
            nickName: ''
          }, 
          defaultAvatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+BAMAAAAQDbi7AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURfjz8NTIvOPa0drQxe3l3/Pt6dJ8uJYAAAGKSURBVFjD7ZjNboMwEIT5vccxuZPS3qHJA4SouQPp+z9LkSJVBduw42mEqnrun9de744XoigoKCgoKCjoN5V/VI1Sp5eLH34d4YdePejPb3rUGQ+uJkIXiNVMJcanc35P8uAGEsVtwOQVVAWZyddkfOgAR5NXHZN+7AZs4YEE5DZcHZjsjyq44wMXYOe1f/c9FPg/wqdP4TXjHlD9sjzbfxnZ/3b/2Mn9q+H8y+5/cv8crPyppI4vv8DEwWuu/MV8vHH89En5K6jyBxrAwddU+QIF3Nv5jvMfTfa/3D+ilpx/soac3zJy/oyI7NkdsMD4lhp/LR4AfoQl3PeHkYAa5Xsm+0YNlzAf3ZnTz0poF/j/xl9/NoB+v2H0YPgHskJWWZ/fm8/WJ3uQvEB5pZzSb17WD/yIGdSK9h2FLy8gwJcWEOFuN0qUUGefzK/a6VGMK90t++2qCvHQ59BFNLK4deDCGxnoQX5+BQ3KF9T25y9yDPPTabbF+dKz9qwTSUPyOD59U7bmm634LwhiuCxbAoGfAAAAAElFTkSuQmCC', // 默认头像
        }
    }

    componentWillMount () {
        let _userInfo = Taro.getStorageSync('userInfo')
        this.setState({
            userInfo: _userInfo
        })
    }

    // 触发登录事件
    handleLogin () {
        let self = this
        handleLogin ((userInfo) => {
            self.setState ({
                userInfo
            })
        })
    }

    // 退出
    handleLoginOut () {
        Taro.removeStorageSync('userInfo'); //清除本地缓存
        this.setState({
            userInfo: {
                avatarUrl: '',
                nickName: ''
            }
        })
        Taro.showToast({
            title: "退出登录成功！"
        })
    }

    render () {
        const { defaultAvatar, userInfo } = this.state

        return (
            <View className='user-profile'>
                <View className='user-profile__wrap'>
                    {/* 头像 */}
                    <View className='user-profile__avatar'>
                        <Image
                        className='user-profile__avatar-img'
                        src={userInfo.avatarUrl || defaultAvatar}
                        />
                    </View>

                    {/* 登录 */}
                    <View className='user-profile__info'>
                        <Text className='user-profile__info-name' onClick={this.handleLogin.bind(this)}>
                            { userInfo.nickName || '未登录'}
                        </Text>
                        {Object.keys(userInfo).length?<View className='user-profile__info-tip' onClick={this.handleLoginOut.bind(this)}>退出登录</View>:<View className='user-profile__info-tip' onClick={this.handleLogin.bind(this)}>点击登录账号</View>}
                    </View>

                </View>
            </View>
        )
    }
}
