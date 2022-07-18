import Typography from '@material-ui/core/Typography'
import { OpenInNew } from '@material-ui/icons'
import Image from 'next/image'
import useSwr from 'swr'

import { generateSteamAppUrl, generateSteamAppBannerUrl } from '@/concerns/steam/generateUrl'
import { styled } from '@/styles/StyleConstants'
import type { OwnedGame, OwnedGamesResponse } from '@/types/api'
import fetcher from '@/utils/fetcher'

interface GameInfoGridProps {
  game: OwnedGame
}

const GameInfoGrid = ({ game: { appid, name, playtime_forever } }: GameInfoGridProps) => (
  <StyledFlex key={appid}>
    <a href={generateSteamAppUrl(appid)} rel="noreferrer" target="_blank">
      <Image height="87" src={generateSteamAppBannerUrl(appid)} title={name} width="231" />
    </a>
    <div>
      <a href={generateSteamAppUrl(appid)} rel="noreferrer" target="_blank">
        <Typography align="left" variant="h6">
          {name}
          <OpenInNew fontSize="small" />
        </Typography>
      </a>
      <Typography align="left" variant="subtitle2">
        プレイ時間:
        {Math.round(playtime_forever / 60)}
        時間
      </Typography>
    </div>
  </StyledFlex>
)

const StyledFlex = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
  padding: '0 0.5rem',
})

const GameInfoContents = () => {
  const { data } = useSwr<OwnedGamesResponse>('/api/fetchOwnedGames', fetcher, {
    suspense: true,
  })
  if (!data) {
    return <></>
  }

  const { games } = data
  return (
    <>
      {games.map(({ appid, ...game }) => (
        <GameInfoGrid key={appid} game={{ appid, ...game }} />
      ))}
    </>
  )
}

export default GameInfoContents
