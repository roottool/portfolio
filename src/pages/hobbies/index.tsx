import { CircularProgress, Paper, Typography } from '@material-ui/core'
import { createStyles, withStyles, type Theme, type WithStyles } from '@material-ui/core/styles'
import Head from 'next/head'

import test from './OwnedGames.json'

import PageTitleWrapper from '@/components/atoms/PageTitleWrapper'
import GameInfoContents from '@/components/features/hobbies/GameInfoContents'
import BasePageTemplate from '@/components/templates/BasePageTemplate'
import { MIN_TABLET_SIZE } from '@/shared/styles/StyleConstants'




interface HobbiesProps extends WithStyles<typeof styleSettings> {
  isFetching: boolean
}

const {
  response: { games },
} = test
const { appid, img_logo_url, name, playtime_forever } = games[0]
const props = { appid, img_logo_url, name, playtime_forever }

const Hobbies = ({ classes: { paper, progress }, isFetching }: HobbiesProps) => (
  <div>
    <PageTitleWrapper>Hobbies</PageTitleWrapper>
    <Paper className={paper}>
      <Typography gutterBottom variant="subtitle1">
        FPS かストラテジーを中心に Steam 等でゲームを購入して PC
        で遊んでいます。映画を見たりもします。
      </Typography>
      <hr />
      <Typography variant="h6">Steam ライブラリ</Typography>
      {isFetching && (
        <div>
          <CircularProgress className={progress} />
        </div>
      )}
      <GameInfoContents {...props} />
    </Paper>
  </div>
)

const styleSettings = (theme: Theme) =>
  createStyles({
    paper: {
      margin: '5vh auto',
      overflowX: 'auto',
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

const Container = () => {
  return (
    <>
      <Head>
        <title>Hobbies - roottool&apos;s Portfolio Site</title>
      </Head>
      <BasePageTemplate>
        <StyledHobbies isFetching={false} />
      </BasePageTemplate>
    </>
  )
}

export default Container
