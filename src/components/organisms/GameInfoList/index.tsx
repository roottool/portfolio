import GameInfoListItem from './GameInfoListItem'
import useGameInfoGrid from './useGameInfoGrid'

const GameInfoList = () => {
  const [ownedGames] = useGameInfoGrid()
  return (
    <>
      {ownedGames.map(({ appId, ...game }) => (
        <GameInfoListItem key={appId} {...game} />
      ))}
    </>
  )
}

export default GameInfoList
