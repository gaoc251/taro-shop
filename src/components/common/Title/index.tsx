import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

import arrowRight from "./aseets/arrow-right.png"

interface propType {
  
}
export default class Title extends Component<propType, any> {

  constructor (props) {
    super(props)
    this.state = { 
      color: '#bfbfbf'
    }
  }

  static defaultProps = {
    title: '',
    link: ''
  }

  render () {
    const { title, link } = this.props
    return (
      <View className='comp-home-title'>
        <Text className='comp-home-title__txt'>{title}</Text>
        <View className='comp-home-title__content'>
          {this.props.children}
        </View>
        {!!link &&
          <View className='comp-home-title__link'>
            <Text className='comp-home-title__link-txt'>更多</Text>
            <Image className='comp-home-title__link-img' src={arrowRight} />
          </View>
        }
      </View>
    )
  }
}
