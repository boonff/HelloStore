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
            url: `${URL_API.Cart}/update/${skuId}`,
            method: 'PUT',
            data: { count }
        })
    },

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
