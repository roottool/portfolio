import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Component } from 'react'

import LazyImage from '../../../../Components/atoms/lazyImage'

interface IProps {
  appid: number
  img_logo_url: string
  name: string
  playtime_forever: number
}

class GameInfoContents extends Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  render(): JSX.Element {
    return (
      <Grid container spacing={8}>
        <Grid
          item
          md={4}
          sm={6}
          style={{
            margin: 'auto',
          }}
          xs={12}
        >
          <a href={`https://store.steampowered.com/app/${this.props.appid}/`}>
            <LazyImage
              src={`http://media.steampowered.com/steamcommunity/public/images/apps/${this.props.appid}/${this.props.img_logo_url}.jpg`}
              title={this.props.name}
            />
          </a>
        </Grid>
        <Grid
          item
          md={4}
          sm={6}
          style={{
            margin: 'auto',
          }}
          xs={12}
        >
          <Typography variant="subtitle1">{this.props.name}</Typography>
        </Grid>
        <Grid
          item
          md={4}
          sm={12}
          style={{
            margin: 'auto',
          }}
          xs={12}
        >
          <Typography variant="subtitle1">
            プレイ時間:
            {Math.round(this.props.playtime_forever / 60)}
            時間
          </Typography>
        </Grid>
      </Grid>
    )
  }
}

export default GameInfoContents
