import GameInfoGridPresenter from './Presenter'
import useGameInfoGrid from './useGameInfoGrid'

const GameInfoGrid = () => {
  const [ownedGames] = useGameInfoGrid()
  return (
    <>
      {ownedGames.map(({ appId, ...game }) => (
        <GameInfoGridPresenter key={appId} {...game} />
      ))}
    </>
  )
}

export default GameInfoGrid
