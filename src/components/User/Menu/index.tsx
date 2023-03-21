import { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'

import classNames from 'classnames'
import './index.scss'

interface stateType {
    count_line: number
}

export default class Menu extends Component<any, stateType> {

    constructor (props) {
        super(props)
        this.state = { // 用户信息
            count_line: 3
        }
    }

    componentWillMount () {
        
    }

    
    render () {
        const {count_line} = this.state
        const {menu} = this.props

        console.log("menu", menu)

        return (
            <View className='user-menu'>
                {/* className='iconfont {{item.icon}}' */}
                {menu && menu.map((item, index:number) => {
                    const nth = (index + 1) % count_line === 0
                    // const lastLine = parseInt(index / count_line) === parseInt(menu.length / count_line)
                    return <View className={classNames('user-menu__item',
                        nth && 'user-menu__item-nth',
                        // lastLine && 'user-menu__item-last'
                    )}>
                        <View  className={classNames('user-menu__item-img iconfont', item.icon)}></View>
                        <View className='user-menu__item-txt'>{item.text}</View>
                    </View>
                })}
            </View>
        )
    }
}
