import { requestApi } from '../request.js'
import { fileUpLoadApi } from '../request.js'
import { URL_API } from '../config.js'

export function getUserInfoApi() {
    return requestApi({
        url: URL_API.UserInfo,
        method: 'GET',
    }).then(res => {
        if (res && res.username) {
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

export function uploadAvatarApi(filePath) {
    return fileUpLoadApi({
        url: URL_API.UserAvatar,
        filePath,
        name: 'file',
    });
}

export function updateNickNameApi(nickName) {
    return requestApi({
        url: URL_API.UserNickName,
        method: 'POST',
        data: nickName,
        header: { 'Content-Type': 'text/plain' }
    })
}

export function updateGenderApi(gender) {
    return requestApi({
        url: URL_API.UserGender,
        method: 'POST',
        data: { gender }, // JSON
        header: { 'Content-Type': 'application/json' }
    })
}

