import { STEAM_APP_IMAGE_URL, STEAM_APP_URL } from './construct'
import { generateSteamAppUrl, generateSteamAppBannerUrl } from './generateUrl'
import type { OwnedGame } from './type'

describe('generateUrl', () => {
  test('generateSteamAppUrl', () => {
    const steamAppId: OwnedGame['appid'] = 27751
    const result = generateSteamAppUrl(steamAppId)
    expect(result).toMatchSnapshot(`${STEAM_APP_URL}/${steamAppId}/`)
  })

  test('generateSteamAppBannerUrl', () => {
    const steamAppId: OwnedGame['appid'] = 27751
    const result = generateSteamAppBannerUrl(steamAppId)
    expect(result).toMatchSnapshot(`${STEAM_APP_IMAGE_URL}/${steamAppId}/capsule_231x87.jpg`)
  })
})
