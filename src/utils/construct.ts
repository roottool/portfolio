const API_KEY = process.env['STEAM_API_KEY']
const STEAM_ID = process.env['STEAM_USER_ID']
export const GET_OWNED_GAMES_API_URL = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${API_KEY}&steamid=${STEAM_ID}&include_appinfo=1`
