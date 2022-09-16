/**
 * 图片上传
 */
import Taro from "@tarojs/taro"
export function ImageUpload (filePath) {
    console.log("filePath", filePath)
 
    return Taro.uploadFile({
        url: 'http://127.0.0.1:8080/upload/img', //仅为示例，非真实的接口地址
        filePath: 'http://tmp/maao07Skn8qoe87859fffc50d5f2d3825118e19b3721.png',
        name: 'file',
        formData: {
          'files': filePath
        },
        success (res){
          const data = res.data
          console.log('图片上传',JSON.parse(data))
        }
    })
}