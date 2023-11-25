import type { NextApiRequest, NextApiResponse } from 'next'

import ky from 'ky'

import type { FetchOwnedGamesResponse } from './type'
import type { OwnedGamesApiResponse } from '@/libs/steam/api'
import { GET_OWNED_GAMES_API_URL } from '@/libs/steam/construct'
import convertPlayTimeToHours from '@/libs/steam/convertPlayTimeToHours'
import {
	generateSteamAppBannerUrl,
	generateSteamAppUrl,
} from '@/libs/steam/generateUrl'
import sortOwnedGames from '@/libs/steam/sortOwnedGames'

const fetchOwnedGamesHandler = (
	_req: NextApiRequest,
	res: NextApiResponse<FetchOwnedGamesResponse>,
) =>
	ky
		.get(GET_OWNED_GAMES_API_URL)
		.json<OwnedGamesApiResponse>()
		.then(({ response: { games, game_count } }) => {
			const ownedGames: FetchOwnedGamesResponse['ownedGames'] = sortOwnedGames(
				games,
			).map(({ appid, name, playtime_forever }) => ({
				appId: appid,
				appName: name,
				appUrl: generateSteamAppUrl(appid),
				bannerUrl: generateSteamAppBannerUrl(appid),
				playTimeInHours: convertPlayTimeToHours(playtime_forever),
			}))
			res.status(200).json({ game_count, ownedGames })
		})
		.catch(() => {
			res.status(500)
		})

export default fetchOwnedGamesHandler
