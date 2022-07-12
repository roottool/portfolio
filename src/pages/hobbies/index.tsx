import { CircularProgress, Paper, Typography } from '@material-ui/core'
import Head from 'next/head'
import useSwr from 'swr'

// import test from './OwnedGames.json'

import PageTitleWrapper from '@/components/atoms/PageTitleWrapper'
import GameInfoContents from '@/components/features/hobbies/GameInfoContents'
import BasePageTemplate from '@/components/templates/BasePageTemplate'
import { styled } from '@/styles/StyleConstants'
import fetcher from '@/utils/fetcher'
import type { OwnedGame, OwnedGamesResponse } from '@/utils/types'

interface HobbiesProps {
  hasError: boolean
  ownedGames: OwnedGame[] | undefined
}

const Hobbies = ({ hasError, ownedGames }: HobbiesProps) => (
  <BasePageTemplate>
    <PageTitleWrapper>Hobbies</PageTitleWrapper>
    <StyledPaper>
      <Typography gutterBottom variant="subtitle1">
        FPS かストラテジーを中心に Steam 等でゲームを購入して PC
        で遊んでいます。映画を見たりもします。
      </Typography>
      <Typography variant="h6">Steam ライブラリ</Typography>
      <StyledList>
        {hasError && <Typography variant="subtitle1">読み込みに失敗しました</Typography>}
        {!ownedGames && <StyledCircularProgress />}
        {ownedGames && <GameInfoContents ownedGames={ownedGames} />}
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

const Container = () => {
  const { data, error } = useSwr<OwnedGamesResponse>('/api/fetchOwnedGames', fetcher)

  return (
    <>
      <Head>
        <title>Hobbies - roottool&apos;s Portfolio Site</title>
      </Head>
      <Hobbies hasError={!!error} ownedGames={data?.response.games} />
    </>
  )
}

export default Container
