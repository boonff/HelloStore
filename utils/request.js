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

/**
 * 通用文件上传接口
 * @param {Object} options
 * @param {string} options.url 上传地址
 * @param {string} options.filePath 文件路径
 * @param {string} options.name 文件字段名，后端要求的 form-data key
 * @param {Object} [options.formData={}] 额外表单数据
 * @param {Object} [options.header={}] 自定义 header
 * @returns {Promise} 返回 Promise
 */
export function fileUpLoadApi(options) {
    return new Promise((resolve, reject) => {
        const token = wx.getStorageSync('token'); // 自动带 token
        wx.uploadFile({
            url: options.url,
            filePath: options.filePath,
            name: options.name || 'file',
            formData: options.formData || {},
            header: Object.assign(
                { 'Content-Type': 'application/json' },
                options.header || {},
                token ? { Authorization: `Bearer ${token}` } : {}
            ),
            success: (res) => {
                try {
                    console.log("uploadApi res:", res)
                    const data = JSON.parse(res.data);
                    resolve(data);
                } catch (e) {
                    reject({ errMsg: '服务器返回格式错误' });
                }
            },
            fail: (err) => reject(err),
        });
    });
}
