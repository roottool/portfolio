import { STEAM_API_KEY, STEAM_ID } from "astro:env/server";

/**
 * Validates that all required environment variables are set
 * @throws {Error} If any required environment variable is missing
 */
function validateEnv(): void {
	if (!STEAM_API_KEY) {
		throw new Error("STEAM_API_KEY is required");
	}
	if (!STEAM_ID) {
		throw new Error("STEAM_ID is required");
	}
}

// Validate environment variables at module load time
validateEnv();

/**
 * Validated and type-safe configuration object
 */
export const STEAM_CONFIG = {
	apiKey: STEAM_API_KEY,
	steamId: STEAM_ID,
} as const;
