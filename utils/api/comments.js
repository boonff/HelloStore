import { requestApi } from '../request.js'
import { URL_API } from '../config.js'

/**
 * 获取评论详情
 */
export function getCommentsDetail(
    spuId = 0,
    pageIndex = 0,
    pageSize = 10,
    hasImage = false,
    commentLevel = 0
) {
    return requestApi({
        url: `${URL_API.CommentsDetail}?spuId=${spuId}&pageIndex=${pageIndex}&pageSize=${pageSize}&hasImage=${hasImage}&commentLevel=${commentLevel}`,
        method: 'GET'
    }).then(res => {
        if (Array.isArray(res)) {
            console.log('getCommentsDetail 请求成功:', res)
            return res
        } else {
            console.warn('getCommentsDetail 返回的数据不是数组:', res)
            return []
        }
    }).catch(err => {
        console.error('getCommentsDetail 请求失败:', err)
        wx.showToast({ title: '网络错误', icon: 'error' })
        throw err
    })
}

/**
 * 获取随机精选评论
 */
export function getRandomTopCommentsApi(
    spuId = 0,
    randomSize = 5,
    selectSize = 2
) {
    return requestApi({
        url: `${URL_API.RandomTopComments}?spuId=${spuId}&randomSize=${randomSize}&selectSize=${selectSize}`,
        method: 'GET'
    }).then(res => {
        if (Array.isArray(res)) {
            console.log('getRandomTopCommentsApi 请求成功:', res)
            return res
        } else {
            console.warn('getRandomTopCommentsApi 返回的数据不是数组:', res)
            return []
        }
    }).catch(err => {
        console.error('getRandomTopCommentsApi 请求失败:', err)
        wx.showToast({ title: '网络错误', icon: 'error' })
        throw err
    })
}

/**
 * 根据 spuId 获取评论统计
 */
export function getCommentsCountBySpuIdApi(spuId = 0) {
    return requestApi({
        url: `${URL_API.CommentsCount}?spuId=${spuId}`,
        method: 'GET'
    }).then(res => {
        if (res && typeof res === 'object') {
            console.log('getCommentsCountBySpuIdApi 请求成功:', res)
            return res
        } else {
            console.warn('getCommentsCountBySpuIdApi 返回的数据不是对象:', res)
            return {}
        }
    }).catch(err => {
        console.error('getCommentsCountBySpuIdApi 请求失败:', err)
        wx.showToast({ title: '网络错误', icon: 'error' })
        throw err
    })
}
