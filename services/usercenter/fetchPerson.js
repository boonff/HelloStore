import { config } from '../../config/index';
import { getUserInfo } from '../../model/usercenter';

/** 获取个人中心信息 */
function mockFetchPerson() {
    const { delay } = require('../_utils/delay');
    const { genSimpleUserInfo } = require('../../model/usercenter');
    const { genAddress } = require('../../model/address');
    const address = genAddress();
    return delay().then(() => ({
        ...genSimpleUserInfo(),
        address: {
            provinceName: address.provinceName,
            provinceCode: address.provinceCode,
            cityName: address.cityName,
            cityCode: address.cityCode,
        },
    }));
}

/** 获取个人中心信息 */
export async function fetchPerson() {
    // 如果使用 mock 数据
    if (false) {
        return mockFetchPerson()
    } else {
        const res = await getUserInfo()
        // 如果返回 null 或格式不对，返回默认对象
        if (res && res.id) {
            return res
        } else {
            console.warn('fetchPerson 返回数据无效:', res)
            return null
        }
    }

}
