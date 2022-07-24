const STEAM_API_KEY = process.env['STEAM_API_KEY']
const STEAM_ID = process.env['STEAM_USER_ID']
export const GET_OWNED_GAMES_API_URL_WITHOUT_QUERY =
  `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001` as const
export const GET_OWNED_GAMES_API_URL =
  `${GET_OWNED_GAMES_API_URL_WITHOUT_QUERY}/?key=${STEAM_API_KEY}&steamid=${STEAM_ID}&include_appinfo=1` as const

const STEAM_BASE_URL = 'https://store.steampowered.com' as const
export const STEAM_APP_URL = `${STEAM_BASE_URL}/app` as const
export const STEAM_APP_IMAGE_URL = `http://cdn.cloudflare.steamstatic.com/steam/apps` as const
