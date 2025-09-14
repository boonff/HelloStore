import { config } from '../../config/index';

/** 获取商品评论 */
function mockFetchComments(parmas) {
    const { delay } = require('../_utils/delay');
    const { getGoodsAllComments } = require('../../model/comments');
    return delay().then(() => getGoodsAllComments(parmas));
}

function realFetchComments(params) {
    const { getCommentsDetail } = require('../../utils/api/comments');
    return getCommentsDetail(
        params.queryParameter.spuId,
        params.pageNum,
        params.pageSize,
        params.queryParameter.hasImage ?? false,
        params.queryParameter.commentLevel ?? 0,
    );
}
/** 获取商品评论 */
export function fetchComments(parmas) {
    if (false) {
        return mockFetchComments(parmas);
    }
    return realFetchComments(parmas)

}
