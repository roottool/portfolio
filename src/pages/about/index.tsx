import { Card, CardContent, Grid } from '@material-ui/core'
import { createStyles, withStyles, type Theme, type WithStyles } from '@material-ui/core/styles'
import Head from 'next/head'
import { IconContext } from 'react-icons'
import { FaTwitterSquare } from 'react-icons/fa'
import { GoMarkGithub } from 'react-icons/go'

import PageTitleWrapper from '@/components/atoms/PageTitleWrapper'
import BasePageTemplate from '@/components/templates/BasePageTemplate'
import { MIN_TABLET_SIZE } from '@/styles/StyleConstants'

const GITHUB_URL = 'https://github.com/roottool' as const
const TWITTER_URL = 'https://twitter.com/roottool' as const

const About = ({ classes: { card, contents } }: WithStyles<typeof styleSettings>) => (
  <BasePageTemplate>
    <PageTitleWrapper>About</PageTitleWrapper>
    <Card className={card}>
      <CardContent>
        <Grid container className={contents} spacing={8}>
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
  </BasePageTemplate>
)

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
const StyledAbout = withStyles(styleSettings)(About)

const Container = () => (
  <>
    <Head>
      <title>About - roottool&apos;s Portfolio Site</title>
    </Head>
    <StyledAbout />
  </>
)

export default Container
