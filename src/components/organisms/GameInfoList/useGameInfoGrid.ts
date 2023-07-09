import useFetchSuspense from '@/hooks/useFetchSuspense'
import type { FetchOwnedGamesResponse } from '@/pages/api/fetchOwnedGames/type'

const useGameInfoGrid = () => {
	const { data } = useFetchSuspense<FetchOwnedGamesResponse>(
		'/api/fetchOwnedGames',
	)
	const ownedGames = data?.ownedGames ?? []

	return [ownedGames] as const
}

export default useGameInfoGrid
