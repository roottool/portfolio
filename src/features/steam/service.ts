import type { OwnedGame } from './api'

/**
 * Filters games that have been played (playtime > 0)
 * @param games - Array of owned games
 * @returns Filtered array of games with playtime
 */
export function filterPlayedGames(games: OwnedGame[]): OwnedGame[] {
	return games.filter((game) => game.playtime_forever > 0)
}

/**
 * Sorts games by playtime in descending order (most played first)
 * @param games - Array of owned games
 * @returns Sorted array of games
 */
export function sortByPlaytime(games: OwnedGame[]): OwnedGame[] {
	return [...games].sort((a, b) => b.playtime_forever - a.playtime_forever)
}

/**
 * Processes raw game data: filters and sorts by playtime
 * @param games - Array of owned games
 * @returns Processed array of games
 */
export function processGames(games: OwnedGame[]): OwnedGame[] {
	const filtered = filterPlayedGames(games)
	return sortByPlaytime(filtered)
}
