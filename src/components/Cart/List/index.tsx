import { Component } from 'react'
import { View } from '@tarojs/components'

import './index.scss'

import CartListTtem from '../ListItem/index'
import CheckboxItem from '@/components/common/CheckboxItem'

interface propsType {
  list: [{
    groupTitle: string
    groupTip: string
    checked: boolean
    promotionGroupList: []
    onUpdateCheck: any
  }]
}

export default class CartList extends Component<propsType, any> {

    handleUpdateCheck = (item) => {

      const payload = {
        skuList: [{ ...item, checked: !item.checked }]
      }

      this.props.onUpdateCheck(payload, true)
    }

    render () {
        const { list } = this.props
        
        return (
            <View className='cart-list'>
                { list.map((item: any) => {
                  console.log("item", item)
                    return <View className='cart-list-group'>
                        { item.groupTitle && <View className='cart-list-group__header'>
                            <CheckboxItem
                              checked={item.checked}
                              onClick={this.handleUpdateCheck.bind(this, item)}
                            />
                            <View className='cart-list-group__header-tilte'>{item.groupTitle}</View>
                            <View className='cart-list-group__header-tip'>{item.groupTip}</View>
                            <View className='cart-list-group__header-gotip'>{item.toGoTip}</View>
                        </View>}
                        { item.promotionGroupList && item.promotionGroupList.map((cartItem: any) => {
                          console.log("cartItem", cartItem)
                            return <CartListTtem shopItem={cartItem} onUpdateItemCheck={this.props.onUpdateCheck}/>
                        })}
                        { item.status == 1 && <CartListTtem shopItem={item} onUpdateItemCheck={this.props.onUpdateCheck}/>}
                    </View>
                })}
            </View>
        )
    }
}
