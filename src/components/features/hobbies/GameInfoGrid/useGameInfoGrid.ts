import useFetchSuspense from '@/hooks/useFetchSuspense'
import type { FetchOwnedGamesResponse } from '@/pages/api/fetchOwnedGames'

const useGameInfoGrid = () => {
  const { data } = useFetchSuspense<FetchOwnedGamesResponse>('/api/fetchOwnedGames')
  const games = data?.ownedGames ?? []

  return [games] as const
}

export default useGameInfoGrid
