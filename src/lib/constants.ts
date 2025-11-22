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
	STORE_URL: 'https://store.steampowered.com/app/',

	/**
	 * Steam CDN base URL for game assets
	 */
	CDN_URL: 'https://cdn.cloudflare.steamstatic.com/steam/apps/',
} as const
