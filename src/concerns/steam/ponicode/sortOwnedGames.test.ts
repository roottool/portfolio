import sortOwnedGames from '@/concerns/steam/sortOwnedGames'
// @ponicode
describe('sortOwnedGames.default', () => {
  test('0', () => {
    const param1: any = [
      {
        appid: -29.45,
        has_community_visible_stats: true,
        img_icon_url: 'http://placeimg.com/640/480',
        name: 'Pierre Edouard',
        playtime_forever: -29.45,
      },
      {
        appid: -1.0,
        has_community_visible_stats: false,
        img_icon_url: 'http://placeimg.com/640/480',
        name: 'George',
        playtime_forever: -29.45,
      },
    ]
    const result: any = sortOwnedGames(param1)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const param1: any = [
      {
        appid: 1.0,
        has_community_visible_stats: true,
        img_icon_url: 'http://placeimg.com/640/480',
        name: 'Edmond',
        playtime_forever: -1.0,
      },
      {
        appid: -29.45,
        has_community_visible_stats: false,
        img_icon_url: 'http://placeimg.com/640/480',
        name: 'Edmond',
        playtime_forever: 10.23,
      },
    ]
    const result: any = sortOwnedGames(param1)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const param1: any = [
      {
        appid: 10.23,
        has_community_visible_stats: true,
        img_icon_url: 'http://placeimg.com/640/480',
        name: 'Michael',
        playtime_forever: 1.0,
      },
      {
        appid: 10.0,
        has_community_visible_stats: true,
        img_icon_url: 'http://placeimg.com/640/480',
        name: 'Anas',
        playtime_forever: 0.0,
      },
    ]
    const result: any = sortOwnedGames(param1)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const param1: any = [
      {
        appid: 0.0,
        has_community_visible_stats: false,
        img_icon_url: 'http://placeimg.com/640/480',
        name: 'Pierre Edouard',
        playtime_forever: 10.23,
      },
    ]
    const result: any = sortOwnedGames(param1)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const param1: any = [
      {
        appid: -29.45,
        has_community_visible_stats: false,
        img_icon_url: 'http://placeimg.com/640/480',
        name: 'George',
        playtime_forever: 1.0,
      },
    ]
    const result: any = sortOwnedGames(param1)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result: any = sortOwnedGames([])
    expect(result).toMatchSnapshot()
  })
})
