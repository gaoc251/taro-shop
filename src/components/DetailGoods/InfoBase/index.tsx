import { Component } from 'react'
import { View, Text } from '@tarojs/components'

import classNames from 'classnames'
import './index.scss'

interface propType {
    itemInfo: {
        name: string
        simpleDesc: string
        itemStar: {
            goodCmtRate: string
        },
        activityPrice: string
        retailPrice: string
    }
}

export default class InfoBase extends Component<propType> {
    static defaultProps = {
        itemInfo: {
            name: '',
            simpleDesc: '',
            itemStar: {
                goodCmtRate: ''
            },
            activityPrice: '',
            retailPrice: ''
        },
    }

    render () {
        const { itemInfo } = this.props
        const { itemStar } = itemInfo
        return (
            <View className='item-info-base'>
                <View className='item-info-base__header'>
                    <View className='item-info-base__header-wrap'>
                        <Text className='item-info-base__header-name'>{itemInfo.name}</Text>
                        <Text className='item-info-base__header-desc'>{itemInfo.simpleDesc}</Text>
                    </View>
                    <View className='item-info-base__header-star'>
                        <Text className='item-info-base__header-star-txt'>
                        {`${parseFloat(itemStar.goodCmtRate) || 0}%`}
                        </Text>
                        <Text className='item-info-base__header-star-link'>{'好评率'}</Text>
                    </View>
                </View>

                <View className='item-info-base__price'>
                <Text className='item-info-base__price-symbol'>¥</Text>
                <Text className='item-info-base__price-txt'>
                    {itemInfo.activityPrice || itemInfo.retailPrice}
                </Text>
                {!!itemInfo.activityPrice &&
                    <Text className='item-info-base__price-origin'>
                    ¥{itemInfo.retailPrice}
                    </Text>
                }
                </View>
            </View>
        )
    }
}
