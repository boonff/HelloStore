import updateManager from './common/updateManager';

App({
        onLaunch: function () {
                // 初始化云开发
                if (!wx.cloud) {
                        console.error('请使用 2.2.3 或以上基础库');
                } else {
                        wx.cloud.init({
                                env: 'your-env-id', // 替换为你的环境ID
                                traceUser: true, // 是否记录用户访问
                        });
                }
        },
        onShow: function () {
                updateManager();
        },
});