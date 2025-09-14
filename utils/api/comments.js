export function getCommentsBySpuIdApi(spuId = 0) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: `http://10.0.0.210:8080/comments/${spuId}`,
            method: 'GET',
            success: (res) => {
                if (Array.isArray(res.data)) {
                    resolve(res.data);
                    console.log('getCommentsApi 请求成功:', res.data); // <-- 打印返回的数据
                } else {
                    resolve([]);
                    console.warn('getCommentsApi 返回的数据不是数组:', res.data); // <-- 打印警告
                }
            },
            fail: (err) => {
                console.error('getCommentsApi 请求失败:', err); // <-- 打印错误
                wx.showToast({ title: '网络错误', icon: 'error' });
                reject(err);
            }
        });
    });
}

export function getRandomTopCommentsApi(spuId = 0, randomSize = 5, selectSize = 2) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: `http://10.0.0.210:8080/comments/randomTopComments?spuId=${spuId}&randomSize=${randomSize}&selectSize=${selectSize}`,
            method: 'GET',
            success: (res) => {
                if (Array.isArray(res.data)) {
                    resolve(res.data);
                    console.log('getCommentsApi 请求成功:', res.data); // <-- 打印返回的数据
                } else {
                    resolve([]);
                    console.warn('getCommentsApi 返回的数据不是数组:', res.data); // <-- 打印警告
                }
            },
            fail: (err) => {
                console.error('getCommentsApi 请求失败:', err); // <-- 打印错误
                wx.showToast({ title: '网络错误', icon: 'error' });
                reject(err);
            }
        });
    });
}

export function getCommentsCountBySpuIdApi(spuId = 0) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: `http://10.0.0.210:8080/comments/count?spuId=${spuId}`,
            method: 'GET',
            success: (res) => {
                if (res.data && typeof res.data === 'object') {
                    resolve(res.data);
                    console.log('getCommentsCountApi 请求成功:', res.data); // <-- 打印返回的数据
                } else {
                    resolve({});
                    console.warn('getCommentsCountApi 返回的数据不是对象:', res.data); // <-- 打印警告
                }
            },
            fail: (err) => {
                console.error('getCommentsCountApi 请求失败:', err); // <-- 打印错误
                wx.showToast({ title: '网络错误', icon: 'error' });
                reject(err);
            }
        });
    });
}      