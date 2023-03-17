/**
 * 左滑删除操作
 */
import { Component } from 'react'
import { View, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

interface propType {

}
export default class AnimateLeftDel extends Component<propType> {
    state = {
        animation: '',
        startX: 0, // 开始坐标
        startY: 0, // 开始坐标
    }

    componentDidMount() { 
        // 页面渲染完成，实例化动画
    }

    // 滑动开始
    touchstart (e) {
        this.setState({
            startX: e.changedTouches[0].clientX,
            startY: e.changedTouches[0].clientY
        })
    }

    // 滑动时间处理 ——index索引
    touchmove (e) {
        const self = this;
        const {startX, startY} = self.state

        const touchMoveX = e.changedTouches[0].clientX;
        const touchMoveY = e.changedTouches[0].clientY;

        // 获取滑动距离
        const angle = self.angle({startX, startY},{touchMoveX, touchMoveY})

        // 滑过30度角
        if (Math.abs(angle) > 30) return;

        // 页面渲染完成，实例化动画
        const _animate = Taro.createAnimation({
            duration: 400,
            timingFunction: 'linear',
            delay: 100,
            transformOrigin: 'left top 0'
        })
        // 右滑
        if (touchMoveX > startX) {
            console.log("右滑")
            _animate.translateX(0).step()
            self.setState({
               animation: _animate.export()
            })
        } else if (touchMoveX - startX < -10) {
            // 左滑
            console.log("左滑")
    
            _animate.translateX(-80).step()
            self.setState({
                animation: _animate.export()
            })
        }
    }

    // 计算滑动角度
    angle (start, end) {
        const _X = end.X - start.X
        const _Y = end.Y - start.Y
        // 返回角度， math.atan返回数字正反切值
        return (360 * Math.atan(_Y/_X))/(2*Math.PI)
    }

    render() {
        return (
          <ScrollView className='animate-left-del' scrollY>
              <View className='animate-left-del__item'>
                  {/* 删除 */}
                  <View className='animate-left-del__item-del right'>删除</View>
                  {/* 遮盖 */}
                  <View 
                      className='animate-left-del__item-cover'
                      onTouchStart={this.touchstart.bind(this)}
                      onTouchMove={this.touchmove.bind(this)}
                      animation={this.state.animation}
                  >
                    显示的内容
                  </View>
              </View>
          </ScrollView>
        )
    }
}
