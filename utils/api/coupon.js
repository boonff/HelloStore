import { requestApi } from '../request.js'
import { URL_API } from '../config.js'

export const CouponApi = {
    getUserCoupon(status) {
        return requestApi({
            url: `${URL_API.CouponApi}/user/${status}`
        })
    }
}