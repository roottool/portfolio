import { describe, expect, test } from 'vitest'

import { generateSteamAppBannerUrl, generateSteamAppUrl } from './generateUrl'

describe('generateUrl', () => {
	test('generateSteamAppUrl', () => {
		const result = generateSteamAppUrl(27751)
		expect(result).toBe(`${process.env.STEAM_APP_URL}/27751/`)
	})

	test('generateSteamAppBannerUrl', () => {
		const result = generateSteamAppBannerUrl(27751)
		expect(result).toBe(
			`${process.env.STEAM_APP_BANNER_URL}/27751/capsule_231x87.jpg`,
		)
	})
})
