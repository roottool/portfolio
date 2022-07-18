import axios, { type AxiosResponse } from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

import { GET_OWNED_GAMES_API_URL } from '@/concerns/steam/construct'
import sortOwnedGames from '@/concerns/steam/sortOwnedGames'
import type { OwnedGamesApiResponse } from '@/types/api'

const fetchOwnedGamesHandler = (_req: NextApiRequest, res: NextApiResponse) =>
  axios
    .get(GET_OWNED_GAMES_API_URL)
    .then((response: AxiosResponse<OwnedGamesApiResponse>) => {
      const { games, game_count } = response.data.response
      const sortedGamesList = sortOwnedGames(games)
      res.status(200).json({ game_count, games: sortedGamesList })
    })
    .catch((error) => res.status(500).json(error))

export default fetchOwnedGamesHandler
