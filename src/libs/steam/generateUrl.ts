import type { OwnedGame } from './api'
import {
  STEAM_APP_URL,
  STEAM_APP_BANNER_URL,
  STEAM_APP_BANNER_WIDTH,
  STEAM_APP_BANNER_HEIGHT,
} from './construct'

export const generateSteamAppUrl = (appId: OwnedGame['appid']) =>
  `${STEAM_APP_URL}/${appId}/` as const

export const generateSteamAppBannerUrl = (appId: OwnedGame['appid']) =>
  `${STEAM_APP_BANNER_URL}/${appId}/capsule_${STEAM_APP_BANNER_WIDTH}x${STEAM_APP_BANNER_HEIGHT}.jpg` as const
