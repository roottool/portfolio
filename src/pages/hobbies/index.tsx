import { CircularProgress, Paper, Typography } from '@material-ui/core'
import { createStyles, withStyles, type Theme, type WithStyles } from '@material-ui/core/styles'
import Head from 'next/head'
import useSwr from 'swr'

// import test from './OwnedGames.json'

import PageTitleWrapper from '@/components/atoms/PageTitleWrapper'
import GameInfoContents from '@/components/features/hobbies/GameInfoContents'
import BasePageTemplate from '@/components/templates/BasePageTemplate'
import { MIN_TABLET_SIZE, styled } from '@/styles/StyleConstants'
import fetcher from '@/utils/fetcher'
import type { OwnedGame, OwnedGamesResponse } from '@/utils/types'

interface HobbiesProps extends WithStyles<typeof styleSettings> {
  hasError: boolean
  ownedGames: OwnedGame[] | undefined
}

const Hobbies = ({ classes: { paper, progress }, hasError, ownedGames }: HobbiesProps) => (
  <BasePageTemplate>
    <PageTitleWrapper>Hobbies</PageTitleWrapper>
    <Paper className={paper}>
      <Typography gutterBottom variant="subtitle1">
        FPS かストラテジーを中心に Steam 等でゲームを購入して PC で遊んでいます。映画を見たりもします。
      </Typography>
      <Typography variant="h6">Steam ライブラリ</Typography>
      <StyledList>
        {hasError && <Typography variant="subtitle1">読み込みに失敗しました</Typography>}
        {!ownedGames && <CircularProgress className={progress} />}
        {ownedGames && <GameInfoContents ownedGames={ownedGames} />}
      </StyledList>
    </Paper>
  </BasePageTemplate>
)

const styleSettings = (theme: Theme) =>
  createStyles({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '70%',
      gap: '1rem',
      margin: '5vh auto',
      [theme.breakpoints.down(MIN_TABLET_SIZE)]: {
        width: '90%',
      },
      [theme.breakpoints.up(MIN_TABLET_SIZE)]: {
        width: '60%',
      },
    },
    progress: {
      margin: theme.spacing() * 2,
    },
  })
const StyledHobbies = withStyles(styleSettings)(Hobbies)

const StyledList = styled('div', {
  height: '100%',
  width: '100%',
  overflow: 'hidden auto',
})

const Container = () => {
  const { data, error } = useSwr<OwnedGamesResponse>('/api/fetchOwnedGames', fetcher)

  return (
    <>
      <Head>
        <title>Hobbies - roottool&apos;s Portfolio Site</title>
      </Head>
      <StyledHobbies hasError={!!error} ownedGames={data?.response.games} />
    </>
  )
}

export default Container
