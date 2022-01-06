import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles'
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import PageTitleWrapper from '../../Components/PageTitleWrapper'
import contents from './WorksContents.json'

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

const sourceCodeLinkLabel = 'ソースコード'

class Works extends Component<WithStyles<typeof styleSettings>> {
  constructor(props: WithStyles<typeof styleSettings>) {
    super(props)
  }

  public render() {
    const { classes } = this.props
    return (
      <div>
        <Helmet>
          <title>Works - roottool&apos;s Portfolio Site</title>
        </Helmet>
        <PageTitleWrapper>Works</PageTitleWrapper>
        <Grid container className={classes.container}>
          {contents.map((item, key) => (
            <Grid key={key} item className={classes.cardGrid} md={4} sm={6} xs={12}>
              <Card className={classes.card}>
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
                    <Button className={classes.sourceLink} color="primary" href={item.href}>
                      {sourceCodeLinkLabel}
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    )
  }
}

export default withStyles(styleSettings)(Works)
