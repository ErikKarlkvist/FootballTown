import mockjs, { Random } from 'mockjs'

export default class TmpDataFactory {
  static generate() {
    return mockjs.mock({
      'data': [{
        'position|1-10': 1,
        'wins|1-10': 1,
        'draws|1-5': 1,
        'losses|1-5': 1,
        'points|30':1,
      }]
    });
  }
}
