import { Typography } from '@material-ui/core'
import { OpenInNew } from '@material-ui/icons'
import { styled } from '@stitches/react'
import Image from 'next/future/image'

import { STEAM_APP_BANNER_HEIGHT, STEAM_APP_BANNER_WIDTH } from '@/libs/steam/construct'
import type { OwnedGameInfo } from '@/pages/api/fetchOwnedGames'

type GameInfoGridProps = Omit<OwnedGameInfo, 'appId'>

const GameInfoGridPresenter = ({
  appName,
  appUrl,
  bannerUrl,
  playTimeInHours,
}: GameInfoGridProps) => (
  <StyledFlex>
    <a href={appUrl} rel="noopener noreferrer" target="_blank">
      <Image
        alt={appName}
        height={STEAM_APP_BANNER_HEIGHT}
        src={bannerUrl}
        width={STEAM_APP_BANNER_WIDTH}
      />
    </a>
    <div>
      <a href={appUrl} rel="noopener noreferrer" target="_blank">
        <Typography align="left" variant="h6">
          {appName}
          <OpenInNew fontSize="small" />
        </Typography>
      </a>
      <Typography align="left" variant="subtitle2">
        プレイ時間:
        {playTimeInHours}
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

export default GameInfoGridPresenter
