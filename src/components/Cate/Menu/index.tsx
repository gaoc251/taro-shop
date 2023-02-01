import { Component } from 'react'
import { View, Text } from '@tarojs/components'

import classNames from 'classnames'
import './index.scss'

interface propType {
    list: [object],
    current: number,
    onClick: any
  }

export default class Menu extends Component<propType> {
    static defaultProps = {
        list: [],
        current: -1,
        onClick: () => {}
    }

    handleClick = (id) => {
        this.props.onClick(id)
    }

    render () {
        const { current, list } = this.props
        return (
            <View className='cate-menu'>
                { list.map((item:any) => {
                    const active = item.id === current
                    return (
                        <View
                            key={item.id}
                            className={classNames('cate-menu__item', active && 'cate-menu__item--active')}
                            onClick={this.handleClick.bind(this, item.id)}
                        >
                        <Text
                            className={classNames('cate-menu__item-name', active && 'cate-menu__item-name--active')}
                        >
                            {item.name}
                        </Text>
                        </View>
                    )
                })}
            </View>
        )
    }
}