import { fetchComments } from '../../../services/comments/fetchComments';
import { fetchCommentsCount } from '../../../services/comments/fetchCommentsCount';
import dayjs from 'dayjs';
const layoutMap = {
    0: 'vertical',
};
Page({
    data: {
        pageLoading: false,
        commentList: [],
        pageNum: 1,
        myPageNum: 1,
        pageSize: 10,
        total: 0,
        myTotal: 0,
        hasLoaded: false,
        layoutText: layoutMap[0],
        loadMoreStatus: 0,
        myLoadStatus: 0,
        spuId: '1060004',
        commentLevel: '',
        hasImage: '',
        commentType: '',
        totalCount: 0,
        countObj: {
            badCount: '0',
            commentCount: '0',
            goodCount: '0',
            middleCount: '0',
            hasImageCount: '0',
            uidCount: '0',
        },
    },

    onLoad(options) {
        this.getCount(options);
        this.getComments(options);
    },

    async getCount(options) {
        try {
            const result = await fetchCommentsCount(options.spuId,);
            console.log('fetchCommentsCount result', result);
            this.setData({
                countObj: result,
            });
            // const { data, code = '' } = result;
            // if (code.toUpperCase() === 'SUCCESS') {
            //     wx.setNavigationBarTitle({
            //     title: `全部评价(${data.commentCount})`,
            //     });
            //     this.setData({
            //     countObj: data,
            //     });
            // } else {
            //     wx.showToast({
            //     title: '查询失败，请稍候重试',
            //     });
            // }
        } catch (error) { }
    },

    generalQueryData(reset) {
        const { hasImage, pageNum, pageSize, spuId, commentLevel } = this.data;
        const params = {
            pageNum: 0,
            pageSize: 30,
            queryParameter: {
                spuId,
            },
        };
        if (
            Number(commentLevel) === 3 ||
            Number(commentLevel) === 2 ||
            Number(commentLevel) === 1
        ) {
            params.queryParameter.commentLevel = Number(commentLevel);
        }
        if (hasImage && hasImage === '1') {
            params.queryParameter.hasImage = true;
        } else {
            delete params.queryParameter.hasImage;
        }
        // 重置请求
        if (reset) return params;

        return {
            ...params,
            pageNum: pageNum + 1,
            pageSize,
        };
    },

    async init(reset = true) {
        const { loadMoreStatus, commentList = [] } = this.data;
        const params = this.generalQueryData(reset);

        if (loadMoreStatus !== 0) return;

        this.setData({ loadMoreStatus: 1 });

        try {
            const data = await fetchComments(params); // 这里接收 Promise
            if (Array.isArray(data)) {
                const pageList = data;
                pageList.forEach((item) => {
                    item.commentTime = dayjs(Number(item.commentTime)).format('YYYY/MM/DD HH:mm');
                });
                const _commentList = reset ? pageList : commentList.concat(pageList);
                const _loadMoreStatus = _commentList.length === pageList.length ? 2 : 0;

                this.setData({
                    commentList: _commentList,
                    pageNum: params.pageNum || 1,
                    totalCount: pageList.length,
                    loadMoreStatus: _loadMoreStatus,
                    hasLoaded: true,
                });
            } else {
                this.setData({ hasLoaded: true });
            }
        } catch (error) {
            console.error('fetchComments 请求失败:', error);
            wx.showToast({ title: '网络错误', icon: 'error' });
            this.setData({ hasLoaded: true });
        }
    },


    getScoreArray(score) {
        var array = [];
        for (let i = 0; i < 5; i++) {
            if (i < score) {
                array.push(2);
            } else {
                array.push(0);
            }
        }
        return array;
    },

    getComments(options) {
        const { commentLevel = -1, spuId, hasImage = '' } = options;
        if (commentLevel !== -1) {
            this.setData({
                commentLevel: commentLevel,
            });
        }
        this.setData({
            hasImage: hasImage,
            commentType: hasImage ? '4' : '',
            spuId: spuId,
        });
        this.init(true);
    },

    changeTag(e) {
        var { commenttype } = e.currentTarget.dataset;
        var { commentType } = this.data;
        if (commentType === commenttype) return;
        this.setData({
            loadMoreStatus: 0,
            commentList: [],
            total: 0,
            myTotal: 0,
            myPageNum: 1,
            pageNum: 1,
        });
        if (commenttype === '' || commenttype === '5') {
            this.setData({
                hasImage: '',
                commentLevel: '',
            });
        } else if (commenttype === '4') {
            this.setData({
                hasImage: '1',
                commentLevel: '',
            });
        } else {
            this.setData({
                hasImage: '',
                commentLevel: commenttype,
            });
        }
        if (commenttype === '5') {
            this.setData({
                myLoadStatus: 1,
                commentType: commenttype,
            });
            this.getMyCommentsList(); //TODO 未定义的方法
        } else {
            this.setData({
                myLoadStatus: 0,
                commentType: commenttype,
            });
            this.init(true);
        }
    },

    onReachBottom() {
        const { total = 0, commentList } = this.data;
        if (commentList.length === total) {
            this.setData({
                loadMoreStatus: 2,
            });
            return;
        }

        this.init(false);
    },
});
