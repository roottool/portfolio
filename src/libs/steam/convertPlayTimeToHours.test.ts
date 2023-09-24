import { describe, expect, test } from 'vitest'

import convertPlayTimeToHours from './convertPlayTimeToHours'

describe('convertPlayTimeToHours', () => {
	test('Returns 0 if less than or equal to 0.', () => {
		const result = convertPlayTimeToHours(0)
		expect(result).toBe(0)
	})

	test('If greater than 0, returns a value converted from minutes to hours.', () => {
		const result = convertPlayTimeToHours(180)
		expect(result).toBe(3)
	})
})
