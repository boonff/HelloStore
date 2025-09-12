import { config } from '../../config/index';

/** 获取商品列表 */
function mockFetchGoodsList(pageIndex = 1, pageSize = 20) {
    const { delay } = require('../_utils/delay');
    const { getMockGoodsList } = require('../../model/goods');
    return delay().then(() =>
        getMockGoodsList(pageIndex, pageSize).map((item) => {
            return {
                spuId: item.spuId,
                thumb: item.primaryImage,
                title: item.title,
                price: item.minSalePrice,
                originPrice: item.maxLinePrice,
                tags: item.spuTagList.map((tag) => tag.title),
            };
        }),
    );
}

async function realFetchGoodsList(pageIndex = 1, pageSize = 20) {
    const { getGoodsList } = require('../../model/goods');
    return await getGoodsList(pageIndex, pageSize).then((list) => {
        return list.map((item) => ({
            spuId: item.spuId,
            thumb: item.primaryImage,
            title: item.title,
            price: item.minSalePrice,
            originPrice: item.maxLinePrice,
            tags: item.spuTagList.map((tag) => tag.title),
        }));
    });
}

/** 获取商品列表 */
export function fetchGoodsList(pageIndex = 1, pageSize = 20) {
    if (false) {
        return mockFetchGoodsList(pageIndex, pageSize);
    }
    return new Promise((resolve) => {
        realFetchGoodsList(pageIndex, pageSize).then(resolve)
    });
}
