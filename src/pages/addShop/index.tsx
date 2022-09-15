import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

// 组件
import UploadImage from '@/components/UploadImage'
export default class Index extends Component {

  state = {
    isFixTop: false, // 是否吸顶，默认false
  }
  componentWillMount () { }

  componentDidMount () { 
    // 
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { isFixTop } = this.state
    const files = [
      {
        url: 'https://kz-open-beta.oss-cn-hangzhou.aliyuncs.com/staging/100/saas/714922419294343168/86MZLaRKeGA264c9b77ebfb7ea690619762018705b81.png',
        isDefault: true,
      },
      {
        url: 'https://kz-open-beta.oss-cn-hangzhou.aliyuncs.com/staging/100/saas/714922439221481472/IWyagznkhdy5b98d02054df02f823399ad080386cf3d.png'
      }
    ]
    return (
      <View className='add-shop'>
        添加商品
        <UploadImage files={files} maxCount="5"/>
      </View>
    )
  }
}
