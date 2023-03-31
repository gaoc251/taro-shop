import { Component } from 'react'
import { Button, Text } from '@tarojs/components'
import './index.scss'
import classNames from 'classnames'

import { postcss } from '@/utils/style'

interface ReactPropTypes {
  compStyle: object
  type: string
  plain: boolean
  disabled: boolean
  textStyle: string
  openType: string
  loading: boolean
  text: string
  onClick: any
  onGetUserInfo: any
}
export default class ButtonItem extends Component<ReactPropTypes, any> {

  static defaultProps = {
    compStyle: '',
    textStyle: '',
    openType: '',
    plain: false,
    loading: false,
    disabled: false,
    onClick: () => {},
    onGetUserInfo: () => {}
  }

  getCls = (base) => {
    const { type, plain, disabled } = this.props
    return classNames(
      base,
      type === 'primary' && `${base}--primary`,
      plain && `${base}--plain`,
      disabled && `${base}--disabled`
    )
  }

  render () {
    const {
      compStyle, textStyle, openType, loading, disabled, text,
      onClick, onGetUserInfo
    } = this.props
    return (
      <Button
        className={this.getCls('comp-button')}
        style={postcss(compStyle)}
        loading={loading}
        disabled={disabled}
        openType={openType}
        onClick={onClick}
        onGetUserInfo={onGetUserInfo}
      >
        <Text
          className={this.getCls('comp-button__txt')}
          style={textStyle}
        >
          {text}
        </Text>
      </Button>
    )
  }
}
