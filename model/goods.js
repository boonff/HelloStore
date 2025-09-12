import { genGood } from './good';
import { getGoods } from '../utils/api/goods';

export function getMockGoodsList(baseID = 0, length = 10) {
    const data = new Array(length).fill(0).map((_, idx) => {
        const goods = genGood(idx + baseID)
        console.log('getMockGoodsList(); genGood:', goods);
        return goods
    });
    console.log('getMockGoodsList(); data:', data);
    return data;
}

export function getGoodsList(baseID = 0, length = 10) {
    return getGoods()
}



export const goodsList = getMockGoodsList();
