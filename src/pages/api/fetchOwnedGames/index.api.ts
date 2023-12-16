import type { NextApiRequest, NextApiResponse } from 'next'

import ky from 'ky'

import type { FetchOwnedGamesResponse } from './type'
import {
	GET_OWNED_GAMES_API_URL,
	convertPlayTimeToHours,
	generateSteamAppBannerUrl,
	generateSteamAppUrl,
	sortOwnedGames,
} from '@/libs/steam'
import type { OwnedGamesApiResponse } from '@/libs/steam'

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
