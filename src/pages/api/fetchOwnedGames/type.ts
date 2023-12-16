import type {
	OwnedGame,
	convertPlayTimeToHours,
	generateSteamAppBannerUrl,
	generateSteamAppUrl,
} from '@/libs/steam'

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
