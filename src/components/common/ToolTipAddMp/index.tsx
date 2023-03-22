import { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'

import classNames from 'classnames'
import './index.scss'

interface propType {
}

export default class ToolTipAddMyMp extends Component<propType> {
    state = {
        isShowTip: true, // 0 是未弹， 1是已弹
    }

    componentDidMount () {
        let self = this, today =  new Date().toLocaleDateString()
        Taro.getStorage({
            key: 'zf-isShowTip-addMp',
            success: (res) => {
                if (res.data && res.data !== today) {
                    self.setState({isShowTip: true})
                    Taro.setStorageSync('zf-isShowTip-addMp', today)
                } else {
                    self.setState({isShowTip: false})
                }
            },
            fail: (err) => {
                self.setState({isShowTip: true})
                Taro.setStorageSync('zf-isShowTip-addMp', today)
            }
        }).catch(err => {
            console.log(err)
        })
    }

    handleAddMP () {}

    handleCloseTip () {
        this.setState({isShowTip: false})
    }

    render () {
        const { isShowTip } = this.state
        return (
            <View>
                { isShowTip && <View className='tooltip-addmp'>
                    <View onClick={this.handleAddMP}>添加我的小程序，方便下次使用</View>
                    <View className='iconfont icon-taro-times tooltip-addmp-del' onClick={this.handleCloseTip.bind(this)}></View>
                </View>}
            </View>
        )
    }
}
