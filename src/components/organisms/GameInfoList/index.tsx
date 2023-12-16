import GameInfoListItem from './GameInfoListItem'
import type { OwnedGameInfo } from '@/pages/api/fetchOwnedGames/type'

interface Props {
	ownedGames: OwnedGameInfo[]
}

const GameInfoList = ({ ownedGames }: Props) => {
	return ownedGames.map(({ appId, ...game }) => (
		<GameInfoListItem key={appId} {...game} />
	))
}

export default GameInfoList
