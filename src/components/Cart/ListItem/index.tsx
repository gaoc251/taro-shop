import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'

import './index.scss'

import CheckboxItem from "@/components/common/CheckboxItem"

interface propsType {
  shopItem: {
    id: number
    itemName: string
    pic: string
    specValue: {
      specName: string
      specValue: string
    },
    SpecValueList: [{
      id: number
      skuSpecId: number
      picUrl: string
      value: string
    }],
    cnt: number
    actualPrice: string
    prefix: string
    leftTag: any
    discountPriceDesc: string
    discountPrice: string
  }
}

export default class CartListTtem extends Component<propsType, any> {

    handleUpdateCheck (shopItem) {
      debugger
    }

    render () {
        const { shopItem } = this.props
        return (
            <View className='cart-list__item'>
                <CheckboxItem checked={shopItem.checked} onClick={this.handleUpdateCheck.bind(this, shopItem)}/>
                <Image className='cart-list__item-img'src={shopItem.pic}/>
                <View className='cart-list__item-info'>
                    <View className='cart-list__item-title'>
                        {!!shopItem.prefix &&
                          <Text className='cart-list__item-title-tag'>{shopItem.prefix}</Text>
                        }
                        <Text className='cart-list__item-title-name'>
                          {shopItem.itemName}
                        </Text>
                    </View>

                    <View className='cart-list__item-spec'>
                        <Text className='cart-list__item-spec-txt'>
                            {shopItem.specValue.specValue}
                        </Text>
                    </View>

                    <View className='cart-list__item-wrap'>
                        <Text className='cart-list__item-price'>
                            ¥{shopItem.actualPrice}
                        </Text>
                        <View className='cart-list__item-num'>
                            {/* <InputNumber
                              num={shopItem.cnt}
                              onChange={this.handleUpdate.bind(this, shopItem)}
                            /> */}
                        </View>
                    </View>

                </View>

            </View>
        )
    }
}