import { register } from '../../../services/auth/register';

/**
 * 调用后端注册接口
 * @param {string} username - 用户名
 * @param {string} password - 密码
 * @param {string} phoneNumber - 手机号
 * @param {string} nickName - 昵称
 * @param {string} userType - 用户类型，例如 "ADMIN", "MERCHANT", "SELLER"
 * @returns {Promise<{success: boolean, token?: string, message?: string}>} 
 */
Page({
    data: {
        username: '',
        password: '',
        phoneNumber: '',
        nickName: '',
        userTypes: ['ADMIN', 'MERCHANT', 'SELLER'], // 下拉选项
        userType: 'SELLER' // 默认类型
    },

    onUsernameInput(e) {
        this.setData({ username: e.detail.value });
    },
    onPasswordInput(e) {
        this.setData({ password: e.detail.value });
    },
    onPhoneInput(e) {
        this.setData({ phoneNumber: e.detail.value });
    },
    onNickNameInput(e) {
        this.setData({ nickName: e.detail.value });
    },
    onUserTypeChange(e) {
        const index = e.detail.value;
        this.setData({ userType: this.data.userTypes[index] });
    },

    async handleRegister() {
        const { username, password, phoneNumber, nickName, userType } = this.data;

        if (!username || !password || !phoneNumber || !nickName) {
            wx.showToast({ title: '请填写完整信息', icon: 'error' });
            return;
        }

        const result = await register(username, password, phoneNumber, nickName, userType);

        if (result.success) {
            wx.showToast({ title: '注册成功', icon: 'success' });
            console.log('注册成功，返回数据：', result);
            wx.redirectTo({ url: '/pages/home/home' });
        } else {
            wx.showToast({ title: result.message, icon: 'error' });
        }
    }
});
