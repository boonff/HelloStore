import updateManager from './common/updateManager';
import { checkTokenValid } from './utils/api/auth';

App({
    onLaunch() {
        checkTokenValid().then(() =>
            console.log('Token 有效')
        ).catch(err =>
            console.log('Token 无效或验证失败', err.message)
        )

        updateManager();
    },
    onShow: function () {

    },
});