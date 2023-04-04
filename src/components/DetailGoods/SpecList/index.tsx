import { Component, ReactNode } from 'react'
import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './index.scss'
import classNames from 'classnames'

import InputNumber from '@/components/common/InputNumber'
interface propsType {
    specList: Array<any>
    selected: object
    primaryPicUrl: string
    activityPrice: string
    retailPrice: string
    skuMap: Array<any>
    onSelect: any
}

export default class SpecList extends Component<propsType,any> {
    static defaultProps = {
        specList: [],
        selected: {},
        primaryPicUrl: '',
        activityPrice: '',
        retailPrice: '',
        skuMap: [],
        onSelect: () => {}
    }

    state = {
        selected: {},
        img: '',
        cnt: 1
    }

    isValid = item => {
        const { skuMap = {}, specList = [] } = this.props
        if (specList.length > 1) {
          return true
        }
    
        return skuMap[item.id] ? skuMap[item.id].sellVolume : false
    }

    isSelected = (item, groupId) => this.state.selected[groupId] === item.id

    handleSelect = (item, groupId) => {
        if (this.isValid(item)) {
          const selected = {
            ...this.state.selected,
            [groupId]: item.id
          }
          const id = Object.keys(selected).sort((a, b) => a - b).map(key => selected[key]).join(';')
    
          this.setState({ selected })
          if (item.picUrl) {
            this.setState({ img: item.picUrl })
          }
          this.props.onSelect({ id, cnt: this.state.cnt })
        }
    }

    handleUpdate (cnt) {
        this.setState({ cnt })
    }

    render(): ReactNode {
        const { specList, primaryPicUrl, activityPrice, retailPrice } = this.props

        return (
            <View className='item-spec'>
                <View className='item-spec__info'>
                    <Image
                        className='item-spec__info-img'
                        src={this.state.img || primaryPicUrl}
                    />
                    <View className='item-spec__info-wrap'>
                        <View className='item-spec__info-price'>
                        <Text className='item-spec__info-price-txt'>
                            {`价格:¥${activityPrice || retailPrice}`}
                        </Text>
                        {!!activityPrice &&
                            <Text className='item-spec__info-price-origin'>¥{retailPrice}</Text>
                        }
                        </View>
                        <Text className='item-spec__info-tip'>请选择规格属性</Text>
                    </View>
                </View>

                { specList.map((group:any) => {
                    const specList = group.specValueList
                    return <View key={group.id} className='item-spec__group'>
                        <Text className='item-spec__group-title'>{group.name}</Text>
                        <View className='item-spec__group-list'>
                            { specList && specList.map(item => {
                                return <Text
                                    key={item.id}
                                    className={classNames('item-spec__group-list-item', {
                                        'item-spec__group-list-item--active': this.isSelected(item, group.id),
                                        'item-spec__group-list-item--disabled': !this.isValid(item)
                                    })}
                                    onClick={this.handleSelect.bind(this, item, group.id)}
                                >
                                    {item.value}
                                </Text>
                            })}
                        </View>
                    </View>
                })}

                <View className='item-spec__group'>
                    <Text className='item-spec__group-title'>数量</Text>
                    <InputNumber
                        num={this.state.cnt}
                        onChange={this.handleUpdate.bind(this)}
                        compStyle={{
                        marginTop: Taro.pxTransform(20),
                        height: Taro.pxTransform(68)
                        }}
                        numStyle={{
                        width: Taro.pxTransform(130)
                        }}
                    />
                 </View>

            </View>
        )
    }
}