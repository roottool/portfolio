import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Image from 'next/image'
import styled from 'styled-components'

interface Props {
  appid: number
  img_logo_url: string
  name: string
  playtime_forever: number
}

const STEAM_BASE_URL = 'https://store.steampowered.com'
const APP_URL = `${STEAM_BASE_URL}/app`
const APP_IMAGE_URL = `http://media.steampowered.com/steamcommunity/public/images/apps`

const GameInfoContents = ({ appid, img_logo_url, name, playtime_forever }: Props) => (
  <Grid container spacing={8}>
    <StyledGrid item md={4} sm={6} xs={12}>
      <a href={`${APP_URL}/${appid}/`}>
        <Image
          height="69"
          src={`${APP_IMAGE_URL}/${appid}/${img_logo_url}.jpg`}
          title={name}
          width="184"
        />
      </a>
    </StyledGrid>
    <StyledGrid item md={4} sm={6} xs={12}>
      <Typography variant="subtitle1">{name}</Typography>
    </StyledGrid>
    <StyledGrid item md={4} sm={12} xs={12}>
      <Typography variant="subtitle1">
        プレイ時間:
        {Math.round(playtime_forever / 60)}
        時間
      </Typography>
    </StyledGrid>
  </Grid>
)

const StyledGrid = styled(Grid)`
  margin: auto;
`

export default GameInfoContents
