import type { OwnedGame } from '@/libs/steam/api'
import type convertPlayTimeToHours from '@/libs/steam/convertPlayTimeToHours'
import type { generateSteamAppBannerUrl, generateSteamAppUrl } from '@/libs/steam/generateUrl'

export interface OwnedGameInfo {
  appId: OwnedGame['appid']
  appName: OwnedGame['name']
  appUrl: ReturnType<typeof generateSteamAppUrl>
  bannerUrl: ReturnType<typeof generateSteamAppBannerUrl>
  playTimeInHours: ReturnType<typeof convertPlayTimeToHours>
}
export interface FetchOwnedGamesResponse {
  game_count: number
  ownedGames: OwnedGameInfo[]
}
