import { generateSteamAppUrl } from '@/concerns/steam/generateUrl'
import type { OwnedGame } from '@/types/api'
// @ponicode
describe('generateSteamAppUrl', () => {
  test('0', () => {
    const steamAppId: OwnedGame['appid'] = 27751
    const result = generateSteamAppUrl(steamAppId)
    expect(result).toMatchSnapshot(`https://store.steampowered.com/app/${steamAppId}/`)
  })
})
