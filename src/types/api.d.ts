export interface OwnedGamesResponse {
  game_count: number
  games: OwnedGame[]
}

export interface OwnedGamesApiResponse {
  response: OwnedGamesResponse
}

export interface OwnedGame {
  appid: number
  has_community_visible_stats: boolean
  img_icon_url: string
  name: string
  playtime_forever: number
}
