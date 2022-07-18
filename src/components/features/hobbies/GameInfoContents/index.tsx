import Typography from '@material-ui/core/Typography'
import Image from 'next/image'

import { generateSteamAppUrl, generateSteamAppBannerUrl } from '@/concerns/steam/generateUrl'
import { styled } from '@/styles/StyleConstants'
import type { OwnedGame } from '@/types/api'

interface GameInfoGridProps {
  game: OwnedGame
}
interface Props {
  ownedGames: OwnedGame[]
}

const GameInfoGrid = ({ game: { appid, name, playtime_forever } }: GameInfoGridProps) => (
  <StyledFlex key={appid}>
    <a href={generateSteamAppUrl(appid)}>
      <Image height="87" src={generateSteamAppBannerUrl(appid)} title={name} width="231" />
    </a>
    <GrowWrapper />
    <Typography variant="h6">{name}</Typography>
    <GrowWrapper />
    <Typography variant="subtitle2">
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
