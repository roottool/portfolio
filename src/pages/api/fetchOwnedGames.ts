import axios, { type AxiosResponse } from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

import sortOwnedGames from '@/concerns/sortOwnedGames'
import type { OwnedGamesResponse } from '@/types/api'
import { GET_OWNED_GAMES_API_URL } from '@/utils/construct'

const fetchOwnedGamesHandler = (_req: NextApiRequest, res: NextApiResponse) =>
  axios
    .get(GET_OWNED_GAMES_API_URL)
    .then((response: AxiosResponse<OwnedGamesResponse>) => {
      const { games, game_count } = response.data
      const sortedGamesList = sortOwnedGames(games)
      res.status(200).json({ game_count, games: sortedGamesList })
    })
    .catch((error) => res.status(500).json(error))

export default fetchOwnedGamesHandler
