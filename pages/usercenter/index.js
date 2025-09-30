import { fetchUserCenter } from '../../services/usercenter/fetchUsercenter';
import Toast from 'tdesign-miniprogram/toast/index';

const menuData = [
    [
        {
            title: '收货地址',
            tit: '',
            url: '',
            type: 'address',
        },
        {
            title: '优惠券',
            tit: '',
            url: '',
            type: 'coupon',
        },
        {
            title: '积分',
            tit: '',
            url: '',
            type: 'point',
        },
    ],
    [
        {
            title: '帮助中心',
            tit: '',
            url: '',
            type: 'help-center',
        },
        {
            title: '客服热线',
            tit: '',
            url: '',
            type: 'service',
            icon: 'service',
        },
    ],
];

const orderTagInfos = [
    {
        title: '待付款',
        iconName: 'wallet',
        orderNum: 0,
        tabType: 5,
        status: 1,
    },
    {
        title: '待发货',
        iconName: 'deliver',
        orderNum: 0,
        tabType: 10,
        status: 1,
    },
    {
        title: '待收货',
        iconName: 'package',
        orderNum: 0,
        tabType: 40,
        status: 1,
    },
    {
        title: '待评价',
        iconName: 'comment',
        orderNum: 0,
        tabType: 60,
        status: 1,
    },
    {
        title: '退款/售后',
        iconName: 'exchang',
        orderNum: 0,
        tabType: 0,
        status: 1,
    },
];

const getDefaultData = () => ({
    showMakePhone: false,
    userInfo: {
        avatarUrl: '',
        nickName: '正在登录...',
        phoneNumber: '',
    },
    menuData,
    orderTagInfos,
    customerServiceInfo: {},
    currAuthStep: 1,
    showKefu: true,
    versionNo: '',
});

Page({
    data: getDefaultData(),

    onLoad() {
        this.getVersionInfo();
    },

    onShow() {
        this.getTabBar().init();
        this.init(); // 拉取用户信息

        const token = wx.getStorageSync('token');
        if (!token) {
            // 用户未登录，重置页面显示
            this.setData({
                userInfo: {
                    avatarUrl: '',
                    nickName: '未登录',
                    phoneNumber: '',
                },
                orderTagInfos,
                menuData,
                customerServiceInfo: {},
            });
        }
    },
    onPullDownRefresh() {
        this.init();
    },

    init() {
        const token = wx.getStorageSync('token');
        if (token) {
            this.fetUseriInfoHandle(); // 已登录才拉取用户信息
        } else {
            console.log('用户未登录，不拉取信息');
        }
    }
    ,

    fetUseriInfoHandle() {
        fetchUserCenter().then(({ userInfo, countsData, orderTagInfos: orderInfo, customerServiceInfo }) => {
            // eslint-disable-next-line no-unused-expressions
            menuData?.[0].forEach((v) => {
                countsData.forEach((counts) => {
                    if (counts.type === v.type) {
                        // eslint-disable-next-line no-param-reassign
                        v.tit = counts.num;
                    }
                });
            });
            const info = orderTagInfos.map((v, index) => ({
                ...v,
                ...orderInfo[index],
            }));
            this.setData({
                userInfo,
                menuData,
                orderTagInfos: info,
                customerServiceInfo,
                currAuthStep: 2,
            });
            wx.stopPullDownRefresh();
        });
    },

    onClickCell({ currentTarget }) {
        const { type } = currentTarget.dataset;

        switch (type) {
            case 'address': {
                wx.navigateTo({ url: '/pages/user/address/list/index' });
                break;
            }
            case 'service': {
                this.openMakePhone();
                break;
            }
            case 'help-center': {
                Toast({
                    context: this,
                    selector: '#t-toast',
                    message: '你点击了帮助中心',
                    icon: '',
                    duration: 1000,
                });
                break;
            }
            case 'point': {
                Toast({
                    context: this,
                    selector: '#t-toast',
                    message: '你点击了积分菜单',
                    icon: '',
                    duration: 1000,
                });
                break;
            }
            case 'coupon': {
                wx.navigateTo({ url: '/pages/coupon/coupon-list/index' });
                break;
            }
            default: {
                Toast({
                    context: this,
                    selector: '#t-toast',
                    message: '未知跳转',
                    icon: '',
                    duration: 1000,
                });
                break;
            }
        }
    },

    jumpNav(e) {
        const status = e.detail.tabType;

        if (status === 0) {
            wx.navigateTo({ url: '/pages/order/after-service-list/index' });
        } else {
            wx.navigateTo({ url: `/pages/order/order-list/index?status=${status}` });
        }
    },

    jumpAllOrder() {
        wx.navigateTo({ url: '/pages/order/order-list/index' });
    },

    openMakePhone() {
        this.setData({ showMakePhone: true });
    },

    closeMakePhone() {
        this.setData({ showMakePhone: false });
    },

    call() {
        wx.makePhoneCall({
            phoneNumber: this.data.customerServiceInfo.servicePhone,
        });
    },

    gotoUserEditPage() {
        const token = wx.getStorageSync('token'); // 获取本地 token

        if (token) {
            // 已登录，跳转到个人信息页
            wx.navigateTo({
                url: '/pages/user/person-info/index',
            });
        } else {
            // 未登录，跳转到登录页
            wx.navigateTo({
                url: '/pages/auth/login/login',
            });
        }
    },


    getVersionInfo() {
        const versionInfo = wx.getAccountInfoSync();
        const { version, envVersion = __wxConfig } = versionInfo.miniProgram;
        this.setData({
            versionNo: envVersion === 'release' ? version : envVersion,
        });
    },
});
