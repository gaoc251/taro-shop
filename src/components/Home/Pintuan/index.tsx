import { Component } from 'react'
import { View, Text, Image, Swiper, SwiperItem } from '@tarojs/components'

import classNames from 'classnames'
import './index.scss'

import Title from "@/components/common/Title"

interface propType {
    list: [object]
}

export default class Pintuan extends Component<propType> {
    static defaultProps = {
        list: []
    }

    handleClick = ()=>{
        debugger
    }

    render () {
        const { list } = this.props
        console.log("list", list)
        return (
            <View className='home-pin'>
                <View className='home-pin__wrap'>
                    <Title title='免邮拼团' link='#'/>
                <Swiper
                    className='home-pin__swiper'
                    autoplay
                    indicatorDots
                    indicatorActiveColor='rgb(178, 42, 49)'
                >
                    {list.map((item, index) => (
                        <SwiperItem
                            key={index}
                            className='home-pin__swiper-item'
                        >
                            <View key={item.id} className='home-pin__item'>
                                <Image
                                className='home-pin__item-img'
                                src={item.picUrl}
                                />
                                <View className='home-pin__item-info'>
                                <Text className='home-pin__item-price'>{`拼团价¥${item.price}`}</Text>
                                <Text className='home-pin__item-origin'>¥{item.originPrice}</Text>
                                </View>
                                <View className='home-pin__item-num'>
                                <Text className='home-pin__item-num-txt'>{item.userNum}人团</Text>
                                </View>
                            </View>
                        </SwiperItem>
                    ))}
                </Swiper>
                </View>
            </View>
        )
    }
}
