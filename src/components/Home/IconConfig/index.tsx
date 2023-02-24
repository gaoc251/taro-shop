import { Component } from 'react'
import { View, Text, Image, Swiper, SwiperItem } from '@tarojs/components'
import Taro from '@tarojs/taro'
import classNames from 'classnames'
import './index.scss'

import Title from "@/components/common/Title"

interface propType {
    list: [object]
}

export default class IconConfig extends Component<propType> {
    static defaultProps = {
        list: []
    }

    handleClick = (item)=>{
        Taro.navigateTo({
            url: `../../pages/detailGoods/index?id=${item.id}`
        })
    }

    render () {
        const { list } = this.props
        console.log("list", list)
        return (
            <View className='home-icon-config'>
                { list && list.map(item => {
                    return (<View className='home-icon-config__item'>
                        <Image src={item.picUrl} className='home-icon-config__item-img'/>
                        <Text className='home-icon-config__item-txt'>{item.text}</Text>
                    </View>)
                    })
                }
            </View>
        )
    }
}
