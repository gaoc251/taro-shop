import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'

import classNames from 'classnames'
import './index.scss'

interface propType {
}

const navList = [
    {
        icon: 'icon-taro-fenxiang1',
        text: '分享',
        key: 'share'
    }, {
        icon: 'icon-taro-shoucang',
        text: '收藏',
        key: 'favourite'
    }, {
        icon: 'icon-taro-iconfontgoumaihongbao',
        text: '立即购买',
        key: 'buy'
    }
]

export default class Footer extends Component<propType> {
    static defaultProps = {
    }

    // 立即购买
    handleBuy () {
        debugger
    }
    // 收藏
    handleFavourite () {
        debugger
    }

    render () {
        const {  } = this.props
        return (
            <View className='item-footer'>
                {navList.map(nav => {
                    return <View className='item-footer__btn'>
                        <Image
                            className={classNames('item-footer__img')}
                            src={nav.icon}
                            />
                        <Text className='item-footer__txt'>{nav.text}</Text>
                    </View>
                })}
                {/* <View className='item-footer__btn' onClick={this.handleBuy}>
                    <Text className='item-footer__buy-txt'>分享</Text>
                </View>
                <View className='item-footer__btn' onClick={this.handleFavourite}>
                    <Text className='item-footer__buy-txt'>收藏</Text>
                </View>
                <View className='item-footer__btn' onClick={this.handleBuy}>
                    <Text className='item-footer__buy-txt'>立即购买</Text>
                </View> */}
          </View>
        )
    }
}
