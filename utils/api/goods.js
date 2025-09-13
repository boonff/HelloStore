export const searchGoodsApi = (keyword = '') => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: `http://10.0.0.210:8080/goods/search?keyword=${encodeURIComponent(keyword)}`,
            method: 'GET',
            success: (res) => {
                if (Array.isArray(res.data)) {
                    resolve(res.data);
                    console.log('searchGoods 请求成功:', res.data); // <-- 打印返回的数据
                } else {
                    resolve([]);
                    console.warn('searchGoods 返回的数据不是数组:', res.data); // <-- 打印警告
                }
            },
            fail: (err) => {
                console.error('searchGoods 请求失败:', err); // <-- 打印错误
                wx.showToast({ title: '网络错误', icon: 'error' });
                reject(err);
            }
        });
    });
};

export const getGoodsApi = (pageIndex = 0, pageSize = 0) => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: `http://10.0.0.210:8080/goods/range?pageIndex=${pageIndex}&pageSize=${pageSize}`,
            method: 'GET',
            success: (res) => {
                if (Array.isArray(res.data)) {
                    resolve(res.data);
                    console.log('pageindex', pageIndex)
                    console.log('pagesize', pageSize)
                    console.log('getGoods res', res.data); // <-- 打印返回的数据
                } else {
                    resolve([]);
                    console.warn('getGoods 返回的数据不是数组:', res.data); // <-- 打印警告
                }
            },
            fail: (err) => {
                console.error('getGoods 请求失败:', err); // <-- 打印错误
                wx.showToast({ title: '网络错误', icon: 'error' });
                reject(err);
            }
        });
    });
};

export const getGoodDetailApi = (spuId = 0) => {
    return new Promise((resolve, reject) => {
        console.log('getGoodDetail spuId:', spuId); // <-- 打印请求的 spuId
        wx.request({
            url: `http://10.0.0.210:8080/goods/${spuId}`,
            method: 'GET',
            success: (res) => {
                if (res.data && res.data.spuId) {
                    resolve(res.data);
                    console.log('getGoodDetail 请求成功:', res.data); // <-- 打印返回的数据
                } else {
                    resolve(null);
                    console.warn('getGoodDetail 返回的数据无效:', res.data); // <-- 打印警告
                }
            },
            fail: (err) => {
                console.error('getGoodDetail 请求失败:', err); // <-- 打印错误
                wx.showToast({ title: '网络错误', icon: 'error' });
                reject(err);
            }
        });
    });
};