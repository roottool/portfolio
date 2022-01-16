import { CircularProgress, Paper, Typography } from '@material-ui/core'
import { createStyles, withStyles, type Theme, type WithStyles } from '@material-ui/core/styles'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'

import PageTitleWrapper from '@components/atoms/PageTitleWrapper'
import GameInfoTableWrapped from '@components/features/hobbies/GameInfoTableWrapped'

import { ActionDispatcher } from './Container'
import { HobbiesState } from './module'

import { MIN_TABLET_SIZE } from '@/shared/styles/StyleConstants'

interface Props {
  actions: ActionDispatcher
  value: HobbiesState
}
interface HobbiesProps extends WithStyles<typeof styleSettings> {
  hobbiesRedux: Props
  isFetching: HobbiesState['isFetching']
}

const Hobbies = ({ classes: { paper, progress }, hobbiesRedux, isFetching }: HobbiesProps) => (
  <div>
    <PageTitleWrapper>Hobbies</PageTitleWrapper>
    <Paper className={paper}>
      <Typography gutterBottom variant="subtitle1">
        FPS かストラテジーを中心に Steam 等でゲームを購入して PC
        で遊んでいます。映画を見たりもします。
      </Typography>
      <hr />
      <Typography variant="h6">Steam ライブラリ</Typography>
      {isFetching ? (
        <div>
          <CircularProgress className={progress} />
        </div>
      ) : (
        <GameInfoTableWrapped {...hobbiesRedux} />
      )}
    </Paper>
  </div>
)

const useHobbies = ({ actions, value }: Props) => {
  const { requestFetchingUserOwnedGameInfo } = actions
  useEffect(() => requestFetchingUserOwnedGameInfo(), [requestFetchingUserOwnedGameInfo])

  const hobbiesRedux = { actions, value }
  const { isFetching } = value
  return { hobbiesRedux, isFetching }
}

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

const Container = (props: Props) => {
  const { hobbiesRedux, isFetching } = useHobbies(props)

  return (
    <>
      <Helmet>
        <title>Hobbies - roottool&apos;s Portfolio Site</title>
      </Helmet>
      <StyledHobbies hobbiesRedux={hobbiesRedux} isFetching={isFetching} />
    </>
  )
}

export default Container
