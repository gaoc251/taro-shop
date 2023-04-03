import { Component, ReactNode } from 'react'
import Taro from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import './index.scss'
import classNames from 'classnames'

interface propsType {
    visible: boolean,
    compStyle: any,
    onClose: () => {}
}
export default class Popup extends Component<propsType,any> {
    static defaultProps = {
        visible: false,
        compStyle: '',
        onClose: () => {}
    }

    constructor (props) {
        super(props)
        this.state = {
            isShow: props.visible
        }
    }

    componentWillReceiveProps (nextProps) {
        const { visible } = nextProps
        const { isShow } = this.state
        if (visible !== isShow) {
            this.setState({
                isShow: visible
            })
        }
    }

    handleTouchMove (e) {
        e.stopPropagation()
    }

    render(): ReactNode {
        const { onClose, compStyle } = this.props
        const { isShow } = this.state

        return (
            <View className={classNames('comp-popup', isShow && 'comp-popup--visible')} onTouchMove={this.handleTouchMove} style={compStyle}>
                <View className='comp-popup__mask' onClick={onClose} />
                <View className='comp-popup__wrapper'>
                    <ScrollView
                        scrollY
                        className='comp-popup__content'
                        style={{ height: Taro.pxTransform(750) }}
                    >{this.props.children}</ScrollView>
                    <View className='comp-popup__close' onClick={onClose}>
                        <View className='iconfont icon-taro-times'></View>
                    </View>
                </View>
            </View>
        )
    }
}
