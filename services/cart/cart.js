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

/** 选择/取消选择单个商品 **/
export async function selectGoods(spuId, skuId, isSelected) {
    // 如果传的是 0/1，转换为布尔值
    const selected = isSelected === 1 || isSelected === true
    await CartApi.selectCartItem(skuId, selected)
}
export async function selectStoreGoods(storeId, isSelected) {
    const selected = isSelected === 1 || isSelected === true
    await CartApi.selectStoreCartItem(storeId, selected)
}

/** 全选/取消全选购物车 **/
export async function selectAllGoods(isSelected) {
    const selected = isSelected === 1 || isSelected === true
    await CartApi.selectAllCartItem(isSelected)
}


/** 更新购物车中某个商品数量 */
export async function onQuantityChange(spuId, skuId, quantity) {
    await CartApi.updateCartItem(skuId, quantity)
}


