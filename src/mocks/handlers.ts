// src/mocks/handlers.js
import { rest } from 'msw'

import MockedImage from '$/images/EchoCat.webp'
import sortOwnedGames from '@/concerns/sortOwnedGames'
import { GET_OWNED_GAMES_API_URL_WITHOUT_QUERY } from '@/concerns/steam/construct'
import type { OwnedGame } from '@/types/api'

import OwnedGames from './OwnedGames.json'

export const handlers = [
  rest.get(GET_OWNED_GAMES_API_URL_WITHOUT_QUERY, (_req, res, ctx) => {
    return res(ctx.json(OwnedGames))
  }),
  rest.get('/api/fetchOwnedGames', (_req, res, ctx) => {
    const { game_count, games } = OwnedGames.response
    const sortedOwnedGames = sortOwnedGames(games as OwnedGame[])
    return res(ctx.json({ game_count, games: sortedOwnedGames }))
  }),
  rest.get('/_next/image', async (_req, res, ctx) => {
    const image = await fetch(MockedImage.src)
      .then((res) => res.arrayBuffer())
      .catch((err) => {
        throw new Error(err)
      })
    return res(
      ctx.set({
        'Content-Length': image.byteLength.toString(),
        'Content-Type': 'image/webp',
      }),
      ctx.body(image),
    )
  }),
]
