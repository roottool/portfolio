const STEAM_API_KEY = process.env.STEAM_API_KEY
const STEAM_USER_ID = process.env.STEAM_USER_ID
export const GET_OWNED_GAMES_API_URL_WITHOUT_QUERY =
	process.env.GET_OWNED_GAMES_API_URL_WITHOUT_QUERY
export const GET_OWNED_GAMES_API_URL =
	`${GET_OWNED_GAMES_API_URL_WITHOUT_QUERY}/?key=${STEAM_API_KEY}&steamid=${STEAM_USER_ID}&include_appinfo=1` as const satisfies string

export const STEAM_APP_URL = process.env.STEAM_APP_URL

export const STEAM_APP_BANNER_WIDTH = 231 as const satisfies number
export const STEAM_APP_BANNER_HEIGHT = 87 as const satisfies number
export const STEAM_APP_BANNER_URL = process.env.STEAM_APP_BANNER_URL
