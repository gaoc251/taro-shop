import { Component } from 'react'
import { View, Text, Image, Swiper, SwiperItem } from '@tarojs/components'
import Taro from '@tarojs/taro'
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

    handleClick = (item)=>{
        Taro.navigateTo({
            url: `../../pages/detailGoods/index?id=${item.id}`
        })
    }

    render () {
        const { list } = this.props
        return (
            <View className='home-pin'>
                <View className='home-pin__wrap'>
                    <Title title='免邮拼团' link='#'/>
                    <View className='home-pin__content'>
                        {list.map((item, index)=>{
                            return <View key={item.id} className='home-pin__item'onClick={this.handleClick.bind(this, item)}>
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
                        })}
                    </View>

                </View>
            </View>
        )
    }
}
