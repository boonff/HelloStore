import { genGood } from './good';

export function getGoodsList(baseID = 0, length = 10) {
  const data = new Array(length).fill(0).map((_, idx) => {
    const goods = genGood(idx + baseID)
    console.log('getGoodsList(); goods:', goods);
    return goods
  });
  console.log('getGoodsList(); data:', data);
  return data;
}

export const goodsList = getGoodsList();
