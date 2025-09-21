import { requestApi } from '../request.js'
import { URL_API } from '../config.js'

export function getUserInfoApi() {
    return requestApi({
        url: URL_API.USER_INFO,
        method: 'GET',
    }).then(res => {
        if (res && res.id) {
            console.log('getUserInfoApi 请求成功:', res)
            return res
        } else {
            console.warn('getUserInfoApi 返回的数据无效:', res)
            return null
        }
    }).catch(err => {
        console.error('getUserInfoApi 请求失败:', err)
        wx.showToast({ title: '网络错误', icon: 'error' })
        throw err
    })
}