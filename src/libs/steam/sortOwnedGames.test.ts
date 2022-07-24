import sortOwnedGames from './sortOwnedGames'

// @ponicode
describe('sortOwnedGames', () => {
  test('Sorted in descending order for `playtime_forever`.', () => {
    const reversePattern = [
      {
        appid: 2945,
        has_community_visible_stats: false,
        img_icon_url: 'https://www.example.com/img/banner.jpg',
        name: 'George',
        playtime_forever: 60,
      },
      {
        appid: 10,
        has_community_visible_stats: true,
        img_icon_url: 'https://www.example.com/img/banner.jpg',
        name: 'Pierre',
        playtime_forever: 180,
      },
    ]
    const expected = reversePattern.reverse()
    const result = sortOwnedGames(reversePattern)

    expect(result).toEqual(expected)
  })

  test('Sorting order patterns that do not require sorting.', () => {
    const unnecessaryPattern = [
      {
        appid: 10,
        has_community_visible_stats: true,
        img_icon_url: 'https://www.example.com/img/banner.jpg',
        name: 'Pierre',
        playtime_forever: 180,
      },
      {
        appid: 2945,
        has_community_visible_stats: false,
        img_icon_url: 'https://www.example.com/img/banner.jpg',
        name: 'George',
        playtime_forever: 60,
      },
    ]
    const result = sortOwnedGames(unnecessaryPattern)

    expect(result).toEqual(unnecessaryPattern)
  })

  test('Even if the comparison results in the same value, no sorting is required.', () => {
    const unnecessaryPattern = [
      {
        appid: 10,
        has_community_visible_stats: true,
        img_icon_url: 'https://www.example.com/img/banner.jpg',
        name: 'Pierre',
        playtime_forever: 180,
      },
      {
        appid: 2935,
        has_community_visible_stats: false,
        img_icon_url: 'https://www.example.com/img/banner.jpg',
        name: 'George',
        playtime_forever: 180,
      },
    ]
    const result = sortOwnedGames(unnecessaryPattern)

    expect(result).toEqual(unnecessaryPattern)
  })
})
