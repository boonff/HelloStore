import { updateNickNameApi } from "../../../utils/api/user";

Page({
    data: {
        nameValue: '',
    },

    onLoad(options) {
        const { name } = options;
        this.setData({
            nameValue: name,
        });
    },

    async onSubmit() {
        await updateNickNameApi(this.data.nameValue)
        wx.navigateBack({ backRefresh: true });
    },

    clearContent() {

        this.setData({
            nameValue: '',
        });
    },
});
