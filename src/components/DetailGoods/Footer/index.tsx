import { Component } from 'react'
import { View, Text, Image, Button } from '@tarojs/components'

import classNames from 'classnames'
import './index.scss'

interface propType {
}

const navList = [
    {
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
        console.log("购买")
    }
    // 收藏
    handleFavourite () {
        console.log("收藏")
    }

    render () {
        const {  } = this.props
        return (
            <View className='item-footer'>
                {navList.map(nav => {
                    if (nav.key == 'buy') {
                        return <View className='item-footer__btn item-footer__btn-buy' onClick={this.handleBuy}>{nav.text}</View>
                    } else {
                        return <View className='item-footer__btn'>
                            <View
                            className={classNames('item-footer__btn-img iconfont', nav.icon)} onClick={this.handleFavourite}></View>
                            </View>
                    }
                })}
          </View>
        )
    }
}
