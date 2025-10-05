import { requestApi } from '../request'
import { URL_API } from '../config'

export function loginApi(username, password) {
    return requestApi({
        url: URL_API.AuthLogin,
        method: 'POST',
        data: { username, password }
    }).then(res => {
        const token = res.token
        wx.setStorageSync('token', token)
        return token
    })
}

export function registerApi(
    username,
    password,
    phoneNumber,
    nickName,
    userType
) {
    return requestApi({
        url: URL_API.AuthRegister,
        method: 'POST',
        data: { username, password, phoneNumber, nickName, userType }
    }).then(res => {
        const token = res.token
        wx.setStorageSync('token', token)
        return token
    })
}

export function checkTokenValid() {
    return requestApi({
        url: `${URL_API.AppConfig}/verify`,
        method: 'POST'
    }).then(valid => {
        if (!valid) {
            wx.removeStorageSync('token');
            throw new Error('Token 已失效');
        }
    }).catch(err => {
        wx.removeStorageSync('token');
        throw new Error('Token 验证失败');
    });
}

