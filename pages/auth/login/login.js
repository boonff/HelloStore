import { login } from '../../../services/auth/login';

Page({
    data: {
        username: '',
        password: ''
    },

    onUsernameInput(e) {
        this.setData({ username: e.detail.value });
    },

    onPasswordInput(e) {
        this.setData({ password: e.detail.value });
    },

    async handleLogin() {
        const { username, password } = this.data;

        if (!username || !password) {
            wx.showToast({ title: '用户名或密码不能为空', icon: 'error' });
            return;
        }

        const result = await login(username, password);

        if (result.success) {
            console.log('登录成功，准备跳转首页');
            wx.showToast({
                title: '登录成功',
                icon: 'success',
                duration: 1500,
                success: () => {
                    wx.switchTab({ url: '/pages/home/home' });
                }
            });
        } else {
            console.log('登录失败', result.message);
            wx.showToast({ title: result.message, icon: 'error' });
        }
    }

})
