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
    try {
        const res = await getUserInfo()
        return res.data
    } catch (err) {
        console.error('获取个人信息失败', err)
        throw err
    }
}