import { requestApi } from '../request'
import { URL_API } from '../config'

export const getAppConfigApi = () => {
    return requestApi({
        url: URL_API.AppConfig,
        method: 'GET'
    }).then(res => {
        if (res && typeof res === 'object') {
            console.log('getAppConfig 请求成功:', res)
            return res
        } else {
            console.warn('getAppConfig 返回的数据无效:', res)
            return {}
        }
    }).catch(err => {
        console.error('getAppConfig 请求失败:', err)
        wx.showToast({ title: '网络错误', icon: 'error' })
        throw err
    })
}

export const getCustomerServiceConfigApi = () => {
    return requestApi({
        url: URL_API.CustomerServiceConfig,
        method: 'GET'
    }).then(res => {
        if (res && typeof res === 'object') {
            console.log('getCustomerServiceConfig 请求成功:', res)
            return res
        } else {
            console.warn('getCustomerServiceConfig 返回的数据无效:', res)
            return {}
        }
    }).catch(err => {
        console.error('getCustomerServiceConfig 请求失败:', err)
        wx.showToast({ title: '网络错误', icon: 'error' })
        throw err
    })
}