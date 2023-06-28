import { Typography } from '@material-ui/core'
import { styled } from '@stitches/react'
import Image from 'next/image'
import { MdOpenInNew } from 'react-icons/md'

import { STEAM_APP_BANNER_HEIGHT, STEAM_APP_BANNER_WIDTH } from '@/libs/steam/construct'
import type { OwnedGameInfo } from '@/pages/api/fetchOwnedGames'

type GameInfoGridProps = Omit<OwnedGameInfo, 'appId'>

const GameInfoListItem = ({ appName, appUrl, bannerUrl, playTimeInHours }: GameInfoGridProps) => (
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
      <StyledTitle href={appUrl} rel="noopener noreferrer" target="_blank">
        <Typography align="left" variant="h6">
          {appName}
        </Typography>
        <MdOpenInNew />
      </StyledTitle>
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
const StyledTitle = styled('a', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
})

export default GameInfoListItem
