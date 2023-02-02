import { Component } from 'react'
import { View, Text } from '@tarojs/components'

import classNames from 'classnames'
import './index.scss'

interface propType {
    attrList: [{
        attrName: string
        attrValue: string
    }]
}

export default class InfoParam extends Component<propType> {
    static defaultProps = {
        attrList: [{
            attrName: '',
            attrValue: ''
        }]
    }

    render () {
        const { attrList } = this.props
        return (
            <View className='item-info-param'>
                <View className='item-info-param__title'>
                <Text className='item-info-param__title-txt'>商品参数</Text>
                </View>
                { attrList && attrList.map((item, index) => (
                <View key={index} className='item-info-param__item'>
                    <Text className='item-info-param__item-name'>{item.attrName}</Text>
                    <Text className='item-info-param__item-value'>{item.attrValue}</Text>
                </View>
                ))}
          </View>
        )
    }
}
