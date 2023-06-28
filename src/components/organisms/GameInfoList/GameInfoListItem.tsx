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
        <h4>{appName}</h4>
        <MdOpenInNew />
      </StyledTitle>
      <p>プレイ時間: {playTimeInHours}時間</p>
    </div>
  </StyledFlex>
)

const StyledFlex = styled('section', {
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
