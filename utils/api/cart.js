import { requestApi } from "../request"
import { URL_API } from "../config"

export const CartApi = {
    /** 获取购物车 */
    getCart() {
        return requestApi({
            url: `${URL_API.Cart}`,
            method: 'GET'
        })
    },

    /** 选择/取消选择单个商品 **/
    selectCartItem(skuId, isSelected) {
        return requestApi({
            url: `${URL_API.Cart}/select/${skuId}`,
            method: 'PUT'
        })
    },

    /** 全选/取消商店 **/
    selectStoreCartItem(storeId, isSelected) {
        return requestApi({
            url: `${URL_API.Cart}/select/store/${storeId}?isSelected=${isSelected}`,
            method: 'PUT'
        })
    },


    /** 全选/取消全选购物车 **/
    selectAllCartItem(isSelected) {
        return requestApi({
            url: `${URL_API.Cart}/select/all?isSelected=${isSelected}`,
            method: 'PUT'
        })
    },

    /** 添加商品到购物车 */
    addCartItem(cartItem) {
        return requestApi({
            url: `${URL_API.Cart}/add`,
            method: 'POST',
            data: cartItem
        })
    },

    /** 更新购物车中某个商品数量 */
    updateCartItem(skuId, count) {
        return requestApi({
            url: `${URL_API.Cart}/update/${skuId}?count=${count}`,
            method: 'PUT'
        })
    }
    ,

    /** 删除购物车中的商品 */
    removeCartItem(skuId) {
        return requestApi({
            url: `${URL_API.Cart}/remove/${skuId}`,
            method: 'DELETE'
        })
    },

    /** 清空购物车 */
    clearCart() {
        return requestApi({
            url: `${URL_API.Cart}/clear`,
            method: 'DELETE'
        })
    }
}
