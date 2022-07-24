/**
 * Convert play time from minutes to hours.
 */
const convertPlayTimeToHours = (playTimeInMinutes: number) => {
  if (playTimeInMinutes <= 0) {
    return 0
  }

  return Math.round(playTimeInMinutes / 60)
}

export default convertPlayTimeToHours
