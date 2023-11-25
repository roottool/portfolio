// src/mocks/handlers.js
import { HttpResponse, http } from 'msw'

import OwnedGames from './OwnedGames.json'
import type { OwnedGame } from '@/libs/steam/api'
import { GET_OWNED_GAMES_API_URL_WITHOUT_QUERY } from '@/libs/steam/construct'
import convertPlayTimeToHours from '@/libs/steam/convertPlayTimeToHours'
import {
	generateSteamAppBannerUrl,
	generateSteamAppUrl,
} from '@/libs/steam/generateUrl'
import sortOwnedGames from '@/libs/steam/sortOwnedGames'
import type { FetchOwnedGamesResponse } from '@/pages/api/fetchOwnedGames/type'

export const handlers = [
	http.get(GET_OWNED_GAMES_API_URL_WITHOUT_QUERY, () => {
		return HttpResponse.json(OwnedGames)
	}),
	http.get('/api/fetchOwnedGames', () => {
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
		return HttpResponse.json<FetchOwnedGamesResponse>({
			game_count,
			ownedGames,
		})
	}),
]
