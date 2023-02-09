import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'

import classNames from 'classnames'
import './index.scss'

import defaultAvatar from '../../../asset/image/default-avatar.png'

interface propType {
    list: [object]
}

export default class Recommend extends Component<propType> {
    static defaultProps = {
        list: []
    }

    handleClick = ()=>{
        debugger
    }

    render () {
        const { list } = this.props
        return (
            <View className='home-recommend'>
                <View className='home-recommend__title'>
                <Text className='home-recommend__title-txt'>为你推荐</Text>
                </View>
                <View className='home-recommend__list'>
                    { list.map((item) => {
                        const {categoryItem, id} = item
                        return (<View 
                            key={id}
                            className='home-recommend__list-item'
                            onClick={this.handleClick.bind(this, id)}>
                                <Image className='home-recommend__list-item-img' src={categoryItem.listPicUrl} />
                                {!!categoryItem.simpleDesc && !categoryItem.simpleDescClose &&
                                    <Text className='home-recommend__list-item-desc' numberOfLines={1}>
                                        {categoryItem.simpleDesc}
                                    </Text>
                                }

                                <View className='home-recommend__list-item-info'>
                                    {!!categoryItem.limitedTag &&
                                        <Tag text={categoryItem.limitedTag} />
                                    }

                                    <Text className='home-recommend__list-item-name' numberOfLines={1}>
                                        {categoryItem.name}
                                    </Text>

                                    <View className='home-recommend__list-item-price-wrap'>
                                        <Text className='home-recommend__list-item-price'>
                                        ¥{categoryItem.activityPrice || categoryItem.retailPrice}
                                        </Text>
                                        {!!categoryItem.activityPrice &&
                                        <Text className='home-recommend__list-item-price--origin'>
                                            ¥{categoryItem.retailPrice}
                                        </Text>
                                        }
                                    </View>

                                    {!!(categoryItem.comments && categoryItem.comments[0] && categoryItem.comments[0].content) &&
                                        <View className='home-recommend__list-item-commend'>
                                        <Image
                                            className='home-recommend__list-item-commend-img'
                                            src={categoryItem.comments[0].frontUserAvatar || defaultAvatar}
                                        />
                                        <Text className='home-recommend__list-item-commend-txt' numberOfLines={2}>
                                            {categoryItem.comments[0].content}
                                        </Text>
                                    </View>
                                }
                            </View>

                        </View>)
                    })}
                </View>
            </View>
        )
    }
}
