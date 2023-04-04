import { Component, ReactNode } from 'react'
import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './index.scss'
import classNames from 'classnames'


interface propsType {
    num: number,
    compStyle: any,
    optStyle: any,
    numStyle: any,
    onChange: any
}
export default class InputNumber extends Component<propsType,any> {
    static defaultProps = {
        num: 0,
        compStyle: '',
        optStyle: '',
        numStyle: '',
        onChange: () => {}
    }

    handleMinus = () => {
        if (this.props.num > 1) {
            this.props.onChange(this.props.num - 1)
        }
    }

    handlePlus = () => {
        this.props.onChange(this.props.num + 1)
    }

    render(): ReactNode {
        const { num, compStyle, numStyle } = this.props
        const isMinusDisabled = num <= 1
        return (
            <View className='comp-input-number' style={compStyle}>
                <View
                    className={classNames('comp-input-number__minus',
                        isMinusDisabled && 'comp-input-number__minus--disabled'
                    )}
                    onClick={this.handleMinus}>
                    <View className={classNames('iconfont icon-taro-minus icon', isMinusDisabled ?'disabled':'static' )}></View>
                </View>

                <View
                    className='comp-input-number__num'
                    style={numStyle}
                    >
                    <Text className='comp-input-number__num-txt'>{num}</Text>
                </View>

                <View
                    className='comp-input-number__plus'
                    onClick={this.handlePlus}
                >
                <View className='iconfont icon-taro-plus icon comp-input-number__plus-img'></View>
                </View>

            </View>
        )
    }
}