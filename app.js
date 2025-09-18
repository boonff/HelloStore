import updateManager from './common/updateManager';

App({
    onShow: function () {
        updateManager();
    },
});