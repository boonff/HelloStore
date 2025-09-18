export function loginApi(username, password) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: 'http://10.0.0.210:8080/auth/login',
            method: 'POST',
            header: { 'Content-Type': 'application/json' },
            data: { username, password },
            success(res) {
                if (res.statusCode === 200) {
                    const token = res.data.token
                    wx.setStorageSync('token', token)
                    resolve(token)
                } else {
                    reject(new Error(res.data.error || '登录失败'))
                }
            },
            fail(err) {
                reject(err)
            }
        })
    })
}

export function registerApi(
    username,
    password,
    phoneNumber,
    nickName,
    userType
) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: 'http://10.0.0.210:8080/auth/register',
            method: 'POST',
            header: { 'Content-Type': 'application/json' },
            data: { username, password, phoneNumber, nickName, userType },
            success(res) {
                if (res.statusCode === 200) {
                    const token = res.data.token
                    wx.setStorageSync('token', token)
                    resolve(token)
                } else {
                    reject(new Error(res.data.error || '注册失败'))
                }
            },
            fail(err) {
                reject(err)
            }
        })
    })
}

export function requestWithToken({ url, method = 'GET', data = {} }) {
    const token = wx.getStorageSync('token')
    return new Promise((resolve, reject) => {
        wx.request({
            url,
            method,
            data,
            header: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // 自动带 token
            },
            success(res) { resolve(res) },
            fail(err) { reject(err) }
        })
    })
}
