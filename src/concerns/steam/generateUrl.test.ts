import { generateSteamAppBannerUrl, generateSteamAppUrl } from '@/concerns/steam/generateUrl'
import type { OwnedGame } from '@/types/api'
// @ponicode
describe('generateUrl', () => {
  test('generateSteamAppUrl', () => {
    const steamAppId: OwnedGame['appid'] = 27751
    const result = generateSteamAppUrl(steamAppId)
    expect(result).toMatchSnapshot(`https://store.steampowered.com/app/${steamAppId}/`)
  })

  test('generateSteamAppBannerUrl', () => {
    const steamAppId: OwnedGame['appid'] = 27751
    const result = generateSteamAppBannerUrl(steamAppId)
    expect(result).toMatchSnapshot(
      `http://cdn.cloudflare.steamstatic.com/steam/apps/${steamAppId}/capsule_231x87.jpg`,
    )
  })
})
