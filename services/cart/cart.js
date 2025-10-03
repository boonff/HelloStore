import { config } from '../../config/index';
import { CartApi } from '../../utils/api/cart'

/** 获取购物车mock数据 */
function mockFetchCartGroupData(params) {
    const { delay } = require('../_utils/delay');
    const { genCartGroupData } = require('../../model/cart');

    return delay().then(() => genCartGroupData(params));
}


/** 获取购物车数据 */
export async function fetchCartGroupData() {
    return await CartApi.getCart()
}

export async function onQuantityChange(spuId, skuId, quantity) {
    await CartApi.updateCartItem(skuId, quantity)
}
