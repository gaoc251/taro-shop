import { Component } from 'react'
import { View, Text } from '@tarojs/components'

import classNames from 'classnames'
import './index.scss'

interface propType {
    itemInfo: object
}

export default class CateMenu extends Component<propType> {
    static defaultProps = {
        itemInfo: {},
    }

    render () {
        return (
            <View>wwwww</View>
        )
    }
}
