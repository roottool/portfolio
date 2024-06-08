import type { InferInput } from 'valibot'
import { object, parse, pipe, string, url } from 'valibot'

const envSchema = object({
	STEAM_API_KEY: string(),
	STEAM_USER_ID: string(),
	STEAM_APP_URL: pipe(string(), url()),
	STEAM_APP_BANNER_URL: pipe(string(), url()),
	GET_OWNED_GAMES_API_URL_WITHOUT_QUERY: pipe(string(), url()),
})

parse(envSchema, process.env)

// Impression from https://twitter.com/mattpocockuk/status/1615110808219918352
declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace NodeJS {
		// eslint-disable-next-line @typescript-eslint/no-empty-interface
		interface ProcessEnv extends InferInput<typeof envSchema> {}
	}
}
