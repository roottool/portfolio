import type { OwnedGamesResponse } from '@/types/steam'

/**
 * Steam API response wrapper
 */
interface SteamApiResponse {
	response: OwnedGamesResponse
}

/**
 * Fetches the Steam library for a given user
 * @param apiKey - Steam Web API key
 * @param steamId - Steam user ID
 * @returns Promise resolving to the Steam API response
 */
export async function fetchSteamLibrary(
	apiKey: string,
	steamId: string,
): Promise<SteamApiResponse> {
	const url =
		`https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${apiKey}&steamid=${steamId}&include_appinfo=1&include_played_free_games=1&format=json`
	const response = await fetch(url)

	if (!response.ok) {
		throw new Error(
			`Steam API error: ${response.status} ${response.statusText}`,
		)
	}

	return (await response.json()) as SteamApiResponse
}
