// src/mocks/handlers.js
import { rest } from 'msw'

import type { OwnedGame, OwnedGamesApiResponse } from '@/libs/steam/api'
import { GET_OWNED_GAMES_API_URL_WITHOUT_QUERY } from '@/libs/steam/construct'
import convertPlayTimeToHours from '@/libs/steam/convertPlayTimeToHours'
import { generateSteamAppUrl, generateSteamAppBannerUrl } from '@/libs/steam/generateUrl'
import sortOwnedGames from '@/libs/steam/sortOwnedGames'
import type { FetchOwnedGamesResponse } from '@/pages/api/fetchOwnedGames'

import OwnedGames from './OwnedGames.json'

export const handlers = [
  rest.get<OwnedGamesApiResponse>(GET_OWNED_GAMES_API_URL_WITHOUT_QUERY, (_req, res, ctx) => {
    return res(ctx.json(OwnedGames))
  }),
  rest.get<FetchOwnedGamesResponse>('/api/fetchOwnedGames', (_req, res, ctx) => {
    const { game_count, games } = OwnedGames.response
    const ownedGames = sortOwnedGames(games as OwnedGame[]).map(
      ({ appid, name, playtime_forever }) => ({
        appId: appid,
        appName: name,
        appUrl: generateSteamAppUrl(appid),
        bannerUrl: generateSteamAppBannerUrl(appid),
        playTimeInHours: convertPlayTimeToHours(playtime_forever),
      }),
    )
    return res(ctx.json({ game_count, ownedGames }))
  }),
]
