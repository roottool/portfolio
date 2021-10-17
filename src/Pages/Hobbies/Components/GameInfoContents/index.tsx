import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import LazyImage from '../../../../Components/lazyImage'

interface Props {
  appid: number
  img_logo_url: string
  name: string
  playtime_forever: number
}

const GameInfoContents: (props: Props) => JSX.Element = ({
  appid,
  img_logo_url,
  name,
  playtime_forever,
}) => (
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
      <a href={`https://store.steampowered.com/app/${appid}/`}>
        <LazyImage
          src={`http://media.steampowered.com/steamcommunity/public/images/apps/${appid}/${img_logo_url}.jpg`}
          title={name}
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
      <Typography variant="subtitle1">{name}</Typography>
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
        {Math.round(playtime_forever / 60)}
        時間
      </Typography>
    </Grid>
  </Grid>
)

export default GameInfoContents
