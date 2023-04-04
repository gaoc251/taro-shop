import { Component } from 'react'
import { View } from '@tarojs/components'
import './index.scss'
import classNames from 'classnames'

interface propsType {
    compStyle: any
    checked: boolean
    onClick: any
}
export default class Title extends Component<propsType> {
    static defaultProps = { 
        compStyle: '',
        checked: false,
        onClick: () => {}
    }
    render () {
        const { compStyle, checked } = this.props
        return <View className='comp-checkbox' style={compStyle} onClick={this.props.onClick}>

            <View className={classNames('iconfont icon', checked?'icon-taro-fuxuancheckbox-fill checked':'icon-taro-checkboxround0')}></View>
            {this.props.children}
        </View>
    }
}