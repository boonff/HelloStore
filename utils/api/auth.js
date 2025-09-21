import { requestApi } from '../request'
import { URL_API } from '../config'

export function loginApi(username, password) {
    return requestApi({
        url: URL_API.AUTH_LOGIN,
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
        url: URL_API.AUTH_REGISTER,
        method: 'POST',
        data: { username, password, phoneNumber, nickName, userType }
    }).then(res => {
        const token = res.token
        wx.setStorageSync('token', token)
        return token
    })
}