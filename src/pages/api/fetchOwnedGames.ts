import axios, { type AxiosResponse } from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

import type { OwnedGamesResponse } from '@/utils/types'

const API_KEY = process.env.REACT_APP_STEAM_API_KEY
const STEAM_ID = process.env.REACT_APP_STEAM_USER_ID
const URL = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${API_KEY}&steamid=${STEAM_ID}&include_appinfo=1`

const fetchOwnedGamesHandler = (_req: NextApiRequest, res: NextApiResponse) =>
  axios
    .get(URL)
    .then((response: AxiosResponse<OwnedGamesResponse>) => res.status(200).json(response.data))
    .catch((error) => res.status(500).json(error))

export default fetchOwnedGamesHandler
