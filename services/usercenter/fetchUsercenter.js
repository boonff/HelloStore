import { config } from '../../config/index';

/** 获取个人中心信息 */
function mockFetchUserCenter() {
  const { delay } = require('../_utils/delay');
  const { genMockUsercenter } = require('../../model/usercenter');
  return delay(200).then(() => genMockUsercenter());
}

/** 获取个人中心信息 */
export function fetchUserCenter() {
  const { genUsercenter } = require('../../model/usercenter');
  if (false) {
    return mockFetchUserCenter();
  }
  return genUsercenter();
}
