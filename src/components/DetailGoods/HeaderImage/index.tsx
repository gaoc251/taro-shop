import { Component } from 'react'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'

import classNames from 'classnames'
import './index.scss'

interface propType {
    imgList: []
}

export default class InfoBase extends Component<propType> {
    static defaultProps = {
        imgList: []
    }

    state = {
        current: 0
    }

    handleChange = (e) => {
        const { current } = e.detail
        this.setState({ current })
    }

    render () {
        const { imgList } = this.props
        const { current } = this.state
        return (
            <View className='item-gallery'>
                <Swiper
                    className='item-gallery__swiper'
                    current={current}
                    onChange={this.handleChange}
                >
                {imgList.map((item, index) => (
                    <SwiperItem
                        key={index}
                        className='item-gallery__swiper-item'
                    >
                    <Image
                        className='item-gallery__swiper-item-img'
                        src={item}
                    />
                    </SwiperItem>
                ))}
                </Swiper>
                <View className='item-gallery__indicator'>
                <Text className='item-gallery__indicator-txt'>
                    {`${current + 1}/${imgList.length}`}
                </Text>
                </View>
            </View>
        )
    }
}
