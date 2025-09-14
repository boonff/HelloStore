/** 获取商品详情页评论数 */
function mockFetchGoodDetailsCommentsCount(spuId = 0) {
    const { delay } = require('../_utils/delay');
    const { getMockGoodsDetailsCommentsCount, } = require('../../model/detailsComments');
    return delay().then(() => getMockGoodsDetailsCommentsCount(spuId));
}

/** 获取商品详情页评论数 */
export function getGoodsDetailsCommentsCount(spuId = 0) {
    const { getGoodsDetailsCommentsCount } = require('../../model/detailsComments');
    if (false) {
        return mockFetchGoodDetailsCommentsCount(spuId);
    }
    return new Promise((resolve) => {
        getGoodsDetailsCommentsCount(spuId).then(resolve)
    });
}

/** 获取商品详情页评论 */
function mockFetchGoodDetailsCommentList(spuId = 0) {
    const { delay } = require('../_utils/delay');
    const { getMockGoodsDetailsComments } = require('../../model/detailsComments');
    return delay().then(() => getMockGoodsDetailsComments(spuId));
}

/** 获取商品详情页评论 */
export function getGoodsDetailsCommentList(spuId = 0) {
    const { getGoodsDetailsComments } = require('../../model/detailsComments');
    if (false) {
        return mockFetchGoodDetailsCommentList(spuId);
    }
    return new Promise((resolve) => {
        getGoodsDetailsComments(spuId).then(resolve)
    });
}
