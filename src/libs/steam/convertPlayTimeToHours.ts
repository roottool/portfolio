/**
 * Convert play time from minutes to hours.
 */
export function convertPlayTimeToHours(playTimeInMinutes: number) {
	if (playTimeInMinutes <= 0) {
		return 0
	}

	return Math.round(playTimeInMinutes / 60)
}
