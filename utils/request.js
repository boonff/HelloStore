/**
 * 通用请求接口
 * @param {Object} options
 * @param {string} options.url 请求地址
 * @param {string} [options.method='GET'] 请求方法
 * @param {Object} [options.data={}] 请求参数
 * @param {Object} [options.header={}] 自定义 header
 * @returns {Promise} 返回 Promise
 */
export function requestApi(options) {
    return new Promise((resolve, reject) => {
        const token = wx.getStorageSync('token'); // 自动带 token
        console.log('Request Options:', options); // 调试日志
        wx.request({
            url: options.url,
            method: options.method || 'GET',
            data: options.data || {},
            header: Object.assign(
                { 'Content-Type': 'application/json' },
                options.header || {},
                token ? { Authorization: `Bearer ${token}` } : {}
            ),
            success(res) {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    console.log('Response Data:', res.data); // 调试日志
                    resolve(res.data);
                } else {
                    reject(new Error(res.data && res.data.error ? res.data.error : `请求失败，状态码 ${res.statusCode}`));
                }
            },
            fail(err) {
                reject(err);
            }
        });
    });
}
