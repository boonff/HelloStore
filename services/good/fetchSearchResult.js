/* eslint-disable no-param-reassign */
import { config } from '../../config/index';

// TODO: 统一import风格
/** 获取搜索结果 */
function mockSearchResult(params) {
  const { delay } = require('../_utils/delay');
  const { getSearchResult } = require('../../model/search');

  const data = getSearchResult(params);

  if (data.spuList.length) {
    data.spuList.forEach((item) => {
      item.spuId = item.spuId;
      item.thumb = item.primaryImage;
      item.title = item.title;
      item.price = item.minSalePrice;
      item.originPrice = item.maxLinePrice;
      if (item.spuTagList) {
        item.tags = item.spuTagList.map((tag) => ({ title: tag.title }));
      } else {
        item.tags = [];
      }
    });
  }
  return delay().then(() => {
    return data;
  });
}

/** 获取搜索结果 */
export function getSearchResult(params) {
  if (config.useMock) {
    return mockSearchResult(params);
  }
  return new Promise((resolve) => {
    resolve('real api');
  });
}
