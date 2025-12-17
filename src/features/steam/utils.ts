/**
 * Processes raw game data: filters and sorts by playtime
 * @param games - Array of owned games
 * @returns Processed array of games
 */
export function processGames(games: OwnedGame[]): OwnedGame[] {
	const filtered = filterPlayedGames(games);
	return sortByPlaytime(filtered);
}

/**
 * Filters games that have been played (playtime > 0)
 * @param games - Array of owned games
 * @returns Filtered array of games with playtime
 */
export function filterPlayedGames(games: OwnedGame[]): OwnedGame[] {
	return games.filter((game) => game.playtime_forever > 0);
}

/**
 * Sorts games by playtime in descending order (most played first)
 * @param games - Array of owned games
 * @returns Sorted array of games
 */
export function sortByPlaytime(games: OwnedGame[]): OwnedGame[] {
	return [...games].sort((a, b) => b.playtime_forever - a.playtime_forever);
}

/**
 * Steam-related constants
 */
export const STEAM = {
	/**
	 * Conversion factor for playtime (minutes to hours)
	 */
	MINUTES_PER_HOUR: 60,

	/**
	 * Steam Store base URL for game pages
	 */
	STORE_URL: "https://store.steampowered.com/app/",

	/**
	 * Steam CDN base URL for game assets
	 */
	CDN_URL: "https://cdn.cloudflare.steamstatic.com/steam/apps/",
} as const;

/**
 * Steam API type definitions
 */

export interface OwnedGame {
	appid: number;
	has_community_visible_stats: boolean;
	img_icon_url: string;
	name: string;
	playtime_forever: number;
}

export interface OwnedGamesResponse {
	game_count: number;
	games: OwnedGame[];
}
