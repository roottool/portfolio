export interface OwnedGame {
  appid: number
  has_community_visible_stats: boolean
  img_icon_url: string
  name: string
  playtime_forever: number
}
export interface OwnedGamesResponse {
  response: {
    game_count: number
    games: OwnedGame[]
  }
}
