import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import { createStyles, withStyles, type WithStyles } from '@material-ui/core/styles'
import Head from 'next/head'

import contents from './SkillsContents.json'

import PageTitleWrapper from '@/components/atoms/PageTitleWrapper'
import BasePageTemplate from '@/components/templates/BasePageTemplate'

const Skills = ({ classes }: WithStyles<typeof styleSettings>) => (
  <div>
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
  </div>
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
    <BasePageTemplate>
      <StyledSkills />
    </BasePageTemplate>
  </>
)

export default Container
