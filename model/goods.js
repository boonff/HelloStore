import { genGood } from './good';
import { getGoodsApi } from '../utils/api/goods';
import { getGoodDetailApi } from '../utils/api/goods';
import { getSkuApi } from '../utils/api/goods';

export function getMockGoodsList(baseID = 0, length = 10) {
    const data = new Array(length).fill(0).map((_, idx) => {
        const goods = genGood(idx + baseID)
        console.log('getMockGoodsList(); genGood:', goods);
        return goods
    });
    console.log('getMockGoodsList(); data:', data);
    return data;
}

export const goodsList = getMockGoodsList();


export async function getGoodsList(pageIndex = 0, pageSize = 10) {
    return await getGoodsApi(pageIndex, pageSize)
}

export async function getGoodDetail(spuId = 0) {
    return await getGoodDetailApi(spuId)
}

export async function getSku(supId = 0) {
    return await getSkuApi(supId)
}
