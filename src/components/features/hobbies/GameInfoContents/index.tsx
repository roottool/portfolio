import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Image from 'next/image'
import styled from 'styled-components'

import type { OwnedGame } from '@/utils/types'

interface GameInfoGridProps {
  game: OwnedGame
}
interface Props {
  ownedGames: OwnedGame[]
}

const STEAM_BASE_URL = 'https://store.steampowered.com'
const APP_URL = `${STEAM_BASE_URL}/app`
const APP_IMAGE_URL = `http://media.steampowered.com/steamcommunity/public/images/apps`

const GameInfoGrid = ({ game: { appid, img_logo_url, name, playtime_forever } }: GameInfoGridProps) => (
  <Grid key={appid ?? 0} container spacing={8}>
    <StyledGrid item md={4} sm={6} xs={12}>
      <a href={`${APP_URL}/${appid}/`}>
        <Image height="69" src={`${APP_IMAGE_URL}/${appid}/${img_logo_url}.jpg`} title={name} width="184" />
      </a>
    </StyledGrid>
    <StyledGrid item md={4} sm={6} xs={12}>
      <Typography variant="subtitle1">{name}</Typography>
    </StyledGrid>
    <StyledGrid item md={4} sm={12} xs={12}>
      <Typography variant="subtitle1">
        プレイ時間:
        {Math.round(playtime_forever / 60)}
        時間
      </Typography>
    </StyledGrid>
  </Grid>
)

const StyledGrid = styled(Grid)`
  margin: auto;
`

const GameInfoContents = ({ ownedGames }: Props) => (
  <>
    {ownedGames.map(({ appid, ...game }) => (
      <GameInfoGrid key={appid} game={{ appid, ...game }} />
    ))}
  </>
)

export default GameInfoContents
