import { getGoodDetail } from '../../model/goods';
import { getSku } from '../../model/goods';

/** 获取商品列表 */
export async function fetchGood(spuId) {
    return await getGoodDetail(spuId)
}

// 获取商品sku
export async function fetchSku(spuId) {
    return await getSku(spuId)
}
