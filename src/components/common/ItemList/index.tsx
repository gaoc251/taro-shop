import { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'

// 组件


// 方法


export default class Cate extends Component {

  state = {}
  componentWillMount() {}

  componentDidMount() {
    // 
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  handleClick (item) {
    Taro.navigateTo({
        url: `../../pages/detailGoods/index?id=${item.id}`
    })
  }

  render() {
    const { list } = this.props

    console.log("list", list)
    return (
        <View className='comp-item-list'>
            <View className='comp-item-list__wrap'>
                { list.map(item => {
                    return <View 
                    key={item.id}
                    className='comp-item-list__item'
                    onClick={this.handleClick.bind(this, item)}>
                        <Image className='comp-item-list__item-img' src={item.listPicUrl} />
                        <View className='comp-item-list__item-info'>
                            <Text className='comp-item-list__item-name'>
                                {item.name}
                            </Text>
                            <View className='comp-item-list__item-price-wrap'>
                                <Text className='comp-item-list__item-price'>
                                    ¥{item.activityPrice || item.retailPrice}
                                </Text>
                                {!!item.activityPrice &&
                                    <Text className='comp-item-list__item-price--origin'>
                                    ¥{item.retailPrice}
                                    </Text>
                                }
                            </View>
                        </View>
                    </View>
                })}
            </View>
        </View>
    )
  }
}
