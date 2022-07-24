import type { OwnedGame } from './api'
import {
  STEAM_APP_BANNER_HEIGHT,
  STEAM_APP_BANNER_URL,
  STEAM_APP_BANNER_WIDTH,
  STEAM_APP_URL,
} from './construct'
import { generateSteamAppUrl, generateSteamAppBannerUrl } from './generateUrl'

describe('generateUrl', () => {
  test('generateSteamAppUrl', () => {
    const steamAppId: OwnedGame['appid'] = 27751
    const result = generateSteamAppUrl(steamAppId)
    expect(result).toBe(`${STEAM_APP_URL}/${steamAppId}/`)
  })

  test('generateSteamAppBannerUrl', () => {
    const steamAppId: OwnedGame['appid'] = 27751
    const result = generateSteamAppBannerUrl(steamAppId)
    expect(result).toBe(
      `${STEAM_APP_BANNER_URL}/${steamAppId}/capsule_${STEAM_APP_BANNER_WIDTH}x${STEAM_APP_BANNER_HEIGHT}.jpg`,
    )
  })
})
