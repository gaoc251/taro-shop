import { Component } from 'react'
import { View, ScrollView, Text } from '@tarojs/components'

import classNames from 'classnames'
import './index.scss'

interface propType {
    list: [object],
    current: number,
    onChange: any
  }

export default class CateTab extends Component<propType> {
    static defaultProps = {
        list: [],
        onChange: () => {}
    }

    handleClick = (index, id) => {
        this.props.onChange(index, id)
    }

    render () {
        const { list, current } = this.props
        return (
            <ScrollView
                scrollX
                className='cate-sub-tab'
            >
                {list.map((item: any, index) => (
                <View
                    key={item.id}
                    className='cate-sub-tab__item'
                    onClick={this.handleClick.bind(this, index, item.id)}
                >
                    <Text className='cate-sub-tab__item-txt'>{item.name}</Text>
                    {index === current &&
                    <View className='cate-sub-tab__item-line' />
                    }
                </View>
                ))}
            </ScrollView>
        )
    }
}