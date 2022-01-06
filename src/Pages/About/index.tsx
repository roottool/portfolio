import { Card, CardContent, Grid } from '@material-ui/core'
import { createStyles, withStyles, type Theme, type WithStyles } from '@material-ui/core/styles'
import { Helmet } from 'react-helmet'
import { IconContext } from 'react-icons'
import { FaTwitterSquare } from 'react-icons/fa'
import { GoMarkGithub } from 'react-icons/go'

import PageTitleWrapper from '../../Components/PageTitleWrapper'
import { MIN_TABLET_SIZE } from '../../Shared/Styles/StyleConstants'

const styleSettings = (theme: Theme) =>
  createStyles({
    card: {
      margin: '5vh auto',
      [theme.breakpoints.down(MIN_TABLET_SIZE)]: {
        width: '90%',
      },
      [theme.breakpoints.up(MIN_TABLET_SIZE)]: {
        width: '60%',
      },
    },
    contents: {
      fontSize: '1.5rem',
      textAlign: 'center',
    },
  })

const GITHUB_URL = 'https://github.com/roottool' as const
const TWITTER_URL = 'https://twitter.com/roottool' as const
const About = ({ classes }: WithStyles<typeof styleSettings>) => (
  <div>
    <PageTitleWrapper>About</PageTitleWrapper>
    <Card className={classes.card}>
      <CardContent>
        <Grid container className={classes.contents} spacing={8}>
          <Grid item xs={6}>
            Name
          </Grid>
          <Grid item xs={6}>
            roottool
          </Grid>
          <Grid item xs={6}>
            Birthday
          </Grid>
          <Grid item xs={6}>
            1990/8/15
          </Grid>
          <Grid item xs={6}>
            <a href={GITHUB_URL}>
              <IconContext.Provider value={{ size: '3em' }}>
                <GoMarkGithub />
              </IconContext.Provider>
            </a>
          </Grid>
          <Grid item xs={6}>
            <a href={TWITTER_URL}>
              <IconContext.Provider value={{ size: '3em' }}>
                <FaTwitterSquare />
              </IconContext.Provider>
            </a>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  </div>
)

const Container = ({ classes }: WithStyles<typeof styleSettings>) => (
  <>
    <Helmet>
      <title>About - roottool&apos;s Portfolio Site</title>
    </Helmet>
    <About classes={classes} />
  </>
)

export default withStyles(styleSettings)(Container)
