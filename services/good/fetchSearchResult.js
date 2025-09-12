/* eslint-disable no-param-reassign */
import { config } from '../../config/index';
import { goodsApi } from '../../utils/api/goods';

// TODO: 统一import风格
/** 获取搜索结果 */
function mockSearchResult(params) {
  const { delay } = require('../_utils/delay');
  const { getSearchResult } = require('../../model/search');

  const data = getSearchResult(params);
  console.log('mockSearchResult params:', params);

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

/** 真实接口 */
function realSearchResult(params) {
  return goodsApi(params.keyword).then((res) => {
    return {
      saasId: null,
      storeId: null,
      pageNum: params?.pageNum || 1,
      pageSize: params?.pageSize || 30,
      totalCount: res.length, // 真实数据条数
      spuList: res,           // 真实返回的商品数组
      algId: 0,
    };
  });
}

/** 获取搜索结果 */
export function getSearchResult(params) {
  if (false) {
    return mockSearchResult(params);
  }
  return new Promise((resolve) => {
    realSearchResult(params).then(resolve)
  });
}

