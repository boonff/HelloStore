import { getMockGoodsList } from './goods';
import { searchGoods } from '../utils/api/goods';

/**
 * @param {number} sort
 * @param {number} pageNum
 * @param {number} pageSize
 * @param {number} minPrice
 * @param {number} maxPrice
 * @param {string} keyword
 */

export function getSearchHistory() {
  return {
    historyWords: [
      '鸡',
      '电脑',
      'iPhone12',
      '车载手机支架',
      '自然堂',
      '小米10',
      '原浆古井贡酒',
      '欧米伽',
      '华为',
      '针织半身裙',
      '氢跑鞋',
      '三盒处理器',
    ],
  };
}

export function getSearchPopular() {
  return {
    popularWords: [
      '鸡',
      '电脑',
      'iPhone12',
      '车载手机支架',
      '自然堂',
      '小米10',
      '原浆古井贡酒',
      '欧米伽',
      '华为',
      '针织半身裙',
      '氢跑鞋',
      '三盒处理器',
    ],
  };
}

export function getMockSearchResult() {
  return {
    saasId: null,
    storeId: null,
    pageNum: 1,
    pageSize: 30,
    totalCount: 1,
    spuList: getMockGoodsList(7),
    algId: 0,
  };
}

export function getSearchResult(params) {
  return searchGoods(params.keyword).then((res) => {
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



