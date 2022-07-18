import Typography from '@material-ui/core/Typography'
import Image from 'next/image'

import { styled } from '@/styles/StyleConstants'

import type { OwnedGame } from '@/utils/types'

interface GameInfoGridProps {
  game: OwnedGame
}
interface Props {
  ownedGames: OwnedGame[]
}

const STEAM_BASE_URL = 'https://store.steampowered.com'
const APP_URL = `${STEAM_BASE_URL}/app`
const APP_IMAGE_URL = `http://cdn.cloudflare.steamstatic.com/steam/apps`

const GameInfoGrid = ({ game: { appid, name, playtime_forever } }: GameInfoGridProps) => (
  <StyledFlex key={appid ?? 0}>
    <a href={`${APP_URL}/${appid}/`}>
      <Image
        height="87"
        src={`${APP_IMAGE_URL}/${appid}/capsule_231x87.jpg`}
        title={name}
        width="231"
      />
    </a>
    <GrowWrapper />
    <Typography variant="h6">{name}</Typography>
    <GrowWrapper />
    <Typography variant="subtitle1">
      プレイ時間:
      {Math.round(playtime_forever / 60)}
      時間
    </Typography>
  </StyledFlex>
)

const StyledFlex = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 0.5rem',
})

const GrowWrapper = styled('div', {
  display: 'block',
  flex: 1,
})

const GameInfoContents = ({ ownedGames }: Props) => (
  <>
    {ownedGames.map(({ appid, ...game }) => (
      <GameInfoGrid key={appid} game={{ appid, ...game }} />
    ))}
  </>
)

export default GameInfoContents
