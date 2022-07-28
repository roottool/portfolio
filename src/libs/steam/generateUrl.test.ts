import { generateSteamAppUrl, generateSteamAppBannerUrl } from './generateUrl'

describe('generateUrl', () => {
  test('generateSteamAppUrl', () => {
    const result = generateSteamAppUrl(27751)
    expect(result).toBe('https://store.steampowered.com/app/27751/')
  })

  test('generateSteamAppBannerUrl', () => {
    const result = generateSteamAppBannerUrl(27751)
    expect(result).toBe('http://cdn.cloudflare.steamstatic.com/steam/apps/27751/capsule_231x87.jpg')
  })
})
