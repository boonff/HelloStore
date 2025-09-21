import { requestApi } from '../request.js'
import { URL_API } from '../config.js'

/**
 * 搜索商品
 */
export const searchGoodsApi = (keyword = '') => {
    return requestApi({
        url: `${URL_API.GOODS_SEARCH}?keyword=${encodeURIComponent(keyword)}`,
        method: 'GET'
    }).then(res => {
        if (Array.isArray(res)) {
            console.log('searchGoods 请求成功:', res)
            return res
        } else {
            console.warn('searchGoods 返回的数据不是数组:', res)
            return []
        }
    }).catch(err => {
        console.error('searchGoods 请求失败:', err)
        wx.showToast({ title: '网络错误', icon: 'error' })
        throw err
    })
}

/**
 * 获取商品列表（分页）
 */
export const getGoodsApi = (pageIndex = 0, pageSize = 0) => {
    return requestApi({
        url: `${URL_API.GOODS_RANGE}?pageIndex=${pageIndex}&pageSize=${pageSize}`,
        method: 'GET'
    }).then(res => {
        if (Array.isArray(res)) {
            console.log('getGoods 请求成功:', res)
            return res
        } else {
            console.warn('getGoods 返回的数据不是数组:', res)
            return []
        }
    }).catch(err => {
        console.error('getGoods 请求失败:', err)
        wx.showToast({ title: '网络错误', icon: 'error' })
        throw err
    })
}

/**
 * 获取商品详情
 */
export const getGoodDetailApi = (spuId = 0) => {
    return requestApi({
        url: `${URL_API.GOODS_DETAIL}/${spuId}`,
        method: 'GET'
    }).then(res => {
        if (res && res.spuId) {
            console.log('getGoodDetail 请求成功:', res)
            return res
        } else {
            console.warn('getGoodDetail 返回的数据无效:', res)
            return null
        }
    }).catch(err => {
        console.error('getGoodDetail 请求失败:', err)
        wx.showToast({ title: '网络错误', icon: 'error' })
        throw err
    })
}
