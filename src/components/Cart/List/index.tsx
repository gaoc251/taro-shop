import { Component } from 'react'
import { View } from '@tarojs/components'

import './index.scss'

import CartListTtem from '../ListItem/index'

interface propsType {
  list: [{
    groupTitle: string
    groupTip: string
    checked: boolean
    promotionGroupList: []
  }]
}

export default class CartList extends Component<propsType, any> {
    render () {
        const { list } = this.props
        return (
            <View className='cart-list'>
                { list.map((item: any) => {
                    return <View className='cart-list-group'>
                        <View className='cart-list-group__header'>
                            <View className='cart-list-group__header-tilte'>{item.groupTitle}</View>
                            <View className='cart-list-group__header-tip'>{item.groupTip}</View>
                            <View className='cart-list-group__header-gotip'>{item.toGoTip}</View>
                        </View>
                        { item.promotionGroupList && item.promotionGroupList.map((cartItem: any) => {
                            return <View className='cart-list-group__item'>
                              {cartItem.cartItemList && cartItem.cartItemList.map((shopItem: any)=>{
                                return <CartListTtem shopItem={shopItem}/>
                              })}
                            </View>
                        })}
                    </View>
                })}
            </View>
        )
    }
}
