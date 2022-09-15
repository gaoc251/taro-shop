/**
 * 图片上传
 */
import Taro from "@tarojs/taro"
export function ImageUpload (filePath) {
    console.log("filePath", filePath)
    // Taro.request({
    //     url: 'http://127.0.0.1:8080/upload/image',
    //     method: "POST",
    //     data: {filePath},
    //     success: function (res) {
    //         debugger
    //       console.log(res.data)
    //     }
    // })    
    // return uploadFile('/upload/image', filePath, 'image')

    return Taro.request({
        url: 'http://127.0.0.1:8080/upload/image',
        method: "POST",
        data: {filePath},
        success: function (res) {
            debugger
          console.log(res.data)
        }
    })    
}