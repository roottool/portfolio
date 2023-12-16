import {
	STEAM_APP_BANNER_HEIGHT,
	STEAM_APP_BANNER_URL,
	STEAM_APP_BANNER_WIDTH,
	STEAM_APP_URL,
} from './construct'
import type { OwnedGame } from './type'

export const generateSteamAppUrl = (appId: OwnedGame['appid']) =>
	`${STEAM_APP_URL}/${appId}/` as const

export const generateSteamAppBannerUrl = (appId: OwnedGame['appid']) =>
	`${STEAM_APP_BANNER_URL}/${appId}/capsule_${STEAM_APP_BANNER_WIDTH}x${STEAM_APP_BANNER_HEIGHT}.jpg` as const
