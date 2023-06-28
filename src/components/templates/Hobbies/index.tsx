import { Typography, Paper, CircularProgress } from '@material-ui/core'
import { Suspense } from 'react'

import PageTitleWrapper from '@/components/atoms/PageTitleWrapper'
import FetchErrorBoundary from '@/components/layouts/FetchErrorBoundary'
import GameInfoList from '@/components/organisms/GameInfoList'
import { styled } from '@/styles/StyleConstants'

const Hobbies = () => (
  <main>
    <PageTitleWrapper>Hobbies</PageTitleWrapper>
    <StyledPaper>
      <Typography gutterBottom variant="subtitle1">
        PCでゲームをすることで、主に遊ぶゲームのジャンルはFPSかストラテジーです。映画を見たりもします。
      </Typography>
      <Typography variant="h6">Steam ライブラリ</Typography>
      <StyledList>
        <FetchErrorBoundary>
          <Suspense fallback={<StyledCircularProgress />}>
            <GameInfoList />
          </Suspense>
        </FetchErrorBoundary>
      </StyledList>
    </StyledPaper>
  </main>
)

const StyledPaper = styled(Paper, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '60%',
  height: '70%',
  gap: '1rem',
  margin: '5vh auto',
  '@bp2': {
    width: '90%',
  },
})

const StyledCircularProgress = styled(CircularProgress, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const StyledList = styled('div', {
  width: '100%',
  height: '100%',
  overflow: 'hidden auto',
})

export default Hobbies
