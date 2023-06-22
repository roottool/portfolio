import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import { createStyles, withStyles, type WithStyles } from '@material-ui/core/styles'
import Head from 'next/head'
import Link from 'next/link'

import PageTitleWrapper from '@/components/atoms/PageTitleWrapper'
import BasicLayout from '@/components/templates/BasicLayout'

import contents from './WorksContents.json'
import type { NextPageWithLayout } from '../_app.page'

const Works = ({ classes: { card, cardGrid, container } }: WithStyles<typeof styleSettings>) => (
  <main>
    <PageTitleWrapper>Works</PageTitleWrapper>
    <Grid container className={container}>
      {contents.map((item, key) => (
        <Grid key={key} item className={cardGrid} md={4} sm={6} xs={12}>
          <Card className={card}>
            <CardContent>
              <Link href={item.href}>
                <Typography gutterBottom variant="h6">
                  {item.title}
                </Typography>
              </Link>
              <Typography variant="subtitle1">
                {item.tools}
                <br />
                {item.text}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </main>
)

const styleSettings = () =>
  createStyles({
    card: {
      minHeight: '272px',
      marginBottom: '30px',
    },
    cardGrid: {
      padding: '0 16px',
    },
    container: {
      margin: '5vh auto',
      maxWidth: '1200px',
    },
    sourceLink: {
      margin: '0 auto',
    },
  })
const StyledWorks = withStyles(styleSettings)(Works)

const Container: NextPageWithLayout = () => (
  <>
    <Head>
      <title>Works - roottool&apos;s Portfolio Site</title>
    </Head>
    <StyledWorks />
  </>
)
Container.getLayout = BasicLayout

export default Container
