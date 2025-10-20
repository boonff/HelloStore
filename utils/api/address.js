import { requestApi } from '../request'
import { URL_API } from '../config'

export const AddressApi = {
    getAddress() {
        return requestApi({ url: URL_API.Address })
    },

    createAddress(addressData) {
        return requestApi({
            url: `${URL_API.Address}/create`,
            method: "POST",
            data: addressData
        })
    }
}