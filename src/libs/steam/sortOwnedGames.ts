import type { OwnedGame } from './type'

export function sortOwnedGames(ownedGames: OwnedGame[]) {
	return ownedGames.sort((a, b) => {
		if (a.playtime_forever < b.playtime_forever) {
			return 1
		}
		if (b.playtime_forever < a.playtime_forever) {
			return -1
		}

		return 0
	})
}
