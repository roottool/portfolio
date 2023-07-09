export interface OwnedGamesApiResponse {
	response: OwnedGamesInfoResponse
}

interface OwnedGamesInfoResponse {
	game_count: number
	games: OwnedGame[]
}

export interface OwnedGame {
	appid: number
	has_community_visible_stats: boolean
	img_icon_url: string
	name: string
	playtime_forever: number
}
