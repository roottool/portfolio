import { CircularProgress, Paper, Typography } from '@material-ui/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Suspense } from 'react'

import PageTitleWrapper from '@/components/atoms/PageTitleWrapper'
import FetchErrorBoundary from '@/components/features/FetchErrorBoundary'
import GameInfoGrid from '@/components/features/hobbies/GameInfoGrid'
import BasePageTemplate from '@/components/templates/BasePageTemplate'
import { styled } from '@/styles/StyleConstants'

const HobbiesPresenter = () => (
  <BasePageTemplate>
    <PageTitleWrapper>Hobbies</PageTitleWrapper>
    <StyledPaper>
      <Typography gutterBottom variant="subtitle1">
        PCでゲームをすることで、主に遊ぶゲームのジャンルはFPSかストラテジーです。映画を見たりもします。
      </Typography>
      <Typography variant="h6">Steam ライブラリ</Typography>
      <StyledList>
        <FetchErrorBoundary>
          <Suspense fallback={<StyledCircularProgress />}>
            <GameInfoGrid />
          </Suspense>
        </FetchErrorBoundary>
      </StyledList>
    </StyledPaper>
  </BasePageTemplate>
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

const Container: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hobbies - roottool&apos;s Portfolio Site</title>
      </Head>
      <HobbiesPresenter />
    </>
  )
}

export default Container
