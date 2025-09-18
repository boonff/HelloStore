import { loginApi } from '../../utils/api/auth';

/**
 * 调用后端登录接口
 * @param {string} username 
 * @param {string} password 
 * @returns {Promise<{success: boolean, token?: string, message?: string}>}
 */
export async function login(username, password) {
    try {
        const token = await loginApi(username, password)
        wx.setStorageSync('token', token) // 保存 token
        return { success: true, token }
    } catch (error) {
        console.error('登录失败:', error)
        return { success: false, message: error.message || '登录失败' }
    }
}
