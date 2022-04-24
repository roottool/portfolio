import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import { createStyles, withStyles, type WithStyles } from '@material-ui/core/styles'
import Head from 'next/head'

import PageTitleWrapper from '@/components/atoms/PageTitleWrapper'
import BasePageTemplate from '@/components/templates/BasePageTemplate'

import contents from './SkillsContents.json'

const Skills = ({ classes }: WithStyles<typeof styleSettings>) => (
  <BasePageTemplate>
    <PageTitleWrapper>Skills</PageTitleWrapper>
    <Grid container className={classes.container}>
      {contents.map((item, key) => (
        <Grid key={key} item className={classes.cardGrid} md={4} sm={6} xs={12}>
          <Card className={classes.card}>
            <CardContent>
              <Typography gutterBottom variant="h6">
                {item.title}
              </Typography>
              <Typography variant="subtitle1">{item.text}</Typography>
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
      height: '300px',
      marginBottom: '30px',
    },
    cardGrid: {
      padding: '0 16px',
    },
    container: {
      margin: '5vh auto',
      maxWidth: '1200px',
    },
  })
const StyledSkills = withStyles(styleSettings)(Skills)

const Container = () => (
  <>
    <Head>
      <title>Skills - roottool&apos;s Portfolio Site</title>
    </Head>
    <StyledSkills />
  </>
)

export default Container
