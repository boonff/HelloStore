import { registerApi } from '../../utils/api/auth';

/**
 * 调用后端登录接口
 * @param {string} username 
 * @param {string} password
 * @param {string} phoneNumber,
 * @param {string} nickName,
 * @param {string} userType
 * @returns {Promise<{success: boolean, token?: string, message?: string}>} 
 */
export async function register(
    username,
    password,
    phoneNumber,
    nickName,
    userType
) {
    try {
        const token = await registerApi(
            username,
            password,
            phoneNumber,
            nickName,
            userType
        )
        wx.setStorageSync('token', token) // 保存 token
        return { success: true, token }
    } catch (error) {
        console.error('登录失败:', error)
        return { success: false, message: error.message || '登录失败' }
    }
}
