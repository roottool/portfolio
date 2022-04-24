import { Button, Card, CardActions, CardContent, Grid, Typography } from '@material-ui/core'
import { createStyles, withStyles, type WithStyles } from '@material-ui/core/styles'
import Head from 'next/head'

import PageTitleWrapper from '@/components/atoms/PageTitleWrapper'
import BasePageTemplate from '@/components/templates/BasePageTemplate'

import contents from './WorksContents.json'

const Works = ({ classes: { card, cardGrid, container, sourceLink } }: WithStyles<typeof styleSettings>) => (
  <BasePageTemplate>
    <PageTitleWrapper>Works</PageTitleWrapper>
    <Grid container className={container}>
      {contents.map((item, key) => (
        <Grid key={key} item className={cardGrid} md={4} sm={6} xs={12}>
          <Card className={card}>
            <CardContent>
              <Typography gutterBottom variant="h6">
                {item.title}
              </Typography>
              <Typography variant="subtitle1">
                {item.tools}
                <br />
                {item.text}
              </Typography>
              <CardActions>
                <Button className={sourceLink} color="primary" href={item.href}>
                  ソースコード
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </BasePageTemplate>
)

const styleSettings = () =>
  createStyles({
    card: {
      height: '350px',
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

const Container = () => (
  <>
    <Head>
      <title>Works - roottool&apos;s Portfolio Site</title>
    </Head>
    <StyledWorks />
  </>
)

export default Container
