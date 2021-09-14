import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles'
import { Component } from 'react'
import { Helmet } from 'react-helmet'

import PageTitleWrapper from '../../Shared/Styles/PageTitleWrapper'
import contents from './SkillsContents.json'

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

class Skills extends Component<WithStyles<typeof styleSettings>> {
  constructor(props: WithStyles<typeof styleSettings>) {
    super(props)
  }

  public render() {
    const { classes } = this.props
    return (
      <div>
        <Helmet>
          <title>Skills - roottool&apos;s Portfolio Site</title>
        </Helmet>
        <PageTitleWrapper>Skills</PageTitleWrapper>
        <Grid container className={classes.container}>
          {contents.map((item, key) => (
            <Grid
              key={key}
              item
              className={classes.cardGrid}
              md={4}
              sm={6}
              xs={12}
            >
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
  }
}

export default withStyles(styleSettings)(Skills)
