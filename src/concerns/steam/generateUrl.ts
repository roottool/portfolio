import type { OwnedGame } from '@/types/api'

import { STEAM_APP_URL, STEAM_APP_IMAGE_URL } from './construct'

export const generateSteamAppUrl = (appId: OwnedGame['appid']) =>
  `${STEAM_APP_URL}/${appId}/` as const

export const generateSteamAppBannerUrl = (appId: OwnedGame['appid']) =>
  `${STEAM_APP_IMAGE_URL}/${appId}/capsule_231x87.jpg` as const
