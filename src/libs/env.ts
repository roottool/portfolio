import type { Input } from 'valibot'
import { object, parse, string, url } from 'valibot'

const envSchema = object({
	STEAM_API_KEY: string(),
	STEAM_USER_ID: string(),
	STEAM_APP_URL: string([url()]),
	STEAM_APP_BANNER_URL: string([url()]),
	GET_OWNED_GAMES_API_URL_WITHOUT_QUERY: string([url()]),
})

parse(envSchema, process.env)

// Impression from https://twitter.com/mattpocockuk/status/1615110808219918352
declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace NodeJS {
		// eslint-disable-next-line @typescript-eslint/no-empty-interface
		interface ProcessEnv extends Input<typeof envSchema> {}
	}
}
