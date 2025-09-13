import { config } from '../../config/index';

/** 获取商品列表 */
function mockFetchGood(ID = 0) {
    const { delay } = require('../_utils/delay');
    const { genGood } = require('../../model/good');
    return delay().then(() => genGood(ID));
}

function realFetchGood(ID = 0) {
    const { getGoodDetail } = require('../../model/goods');
    return getGoodDetail(ID);
}

/** 获取商品列表 */
export function fetchGood(ID = 0) {
    if (false) {
        return mockFetchGood(ID);
    }
    return new Promise((resolve) => {
        realFetchGood(ID).then(resolve)
    });
}
