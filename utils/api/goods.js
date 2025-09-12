export const goodsApi = (keyword = '') => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: `http://10.0.0.210:8080/goods/search?keyword=${encodeURIComponent(keyword)}`,
            method: 'GET',
            success: (res) => {
                if (Array.isArray(res.data)) {
                    // 给每个商品加上 thumb
                    const dataWithThumb = res.data.map(item => ({
                        ...item,
                        thumb: item.primaryImage || '', // 如果没有 primaryImage 就空字符串
                    }));
                    resolve(dataWithThumb);
                } else {
                    resolve([]);
                    console.warn('goodsApi 返回的数据不是数组:', res.data); // <-- 打印警告
                }
            },
            fail: (err) => {
                console.error('goodsApi 请求失败:', err); // <-- 打印错误
                wx.showToast({ title: '网络错误', icon: 'error' });
                reject(err);
            }
        });
    });
};
