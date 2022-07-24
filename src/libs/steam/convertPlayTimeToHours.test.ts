import type { OwnedGame } from './api'
import convertPlayTimeToHours from './convertPlayTimeToHours'

describe('convertPlayTimeToHours', () => {
  test('Returns 0 if less than or equal to 0.', () => {
    const playTimeInMinutes: OwnedGame['playtime_forever'] = 0
    const result = convertPlayTimeToHours(playTimeInMinutes)
    expect(result).toBe(0)
  })

  test('If greater than 0, returns a value converted from minutes to hours.', () => {
    const playTimeInMinutes: OwnedGame['playtime_forever'] = 180
    const result = convertPlayTimeToHours(playTimeInMinutes)
    expect(result).toBe(3)
  })
})
