import useFetch from '@/hooks/useFetch'
import type { FetchOwnedGamesResponse } from '@/pages/api/fetchOwnedGames/type'

const useGameInfoGrid = () => {
	const { data, isLoading } = useFetch<FetchOwnedGamesResponse>(
		'/api/fetchOwnedGames',
	)
	const ownedGames = data?.ownedGames ?? []

	return { ownedGames, isLoading } as const
}

export default useGameInfoGrid
