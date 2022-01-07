import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles, Theme, WithStyles, createStyles } from '@material-ui/core/styles'
import { Component } from 'react'

const styleSettings = (theme: Theme) =>
  createStyles({
    progress: {
      margin: theme.spacing() * 2,
    },
  })

interface IProps extends WithStyles<typeof styleSettings> {
  src: string
  title: string
}

interface IState {
  error: boolean
  loaded: boolean
}

/**
 * 参考URL
 *
 * https://stackoverflow.com/questions/53502271/react-img-tag-add-class-on-load
 */
class LazyImage extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      error: false,
      loaded: false,
    }
  }

  componentDidMount() {
    const img = new Image()
    img.onload = () => {
      this.setState({
        loaded: true,
      })
    }
    img.onerror = () => {
      this.setState({
        error: true,
      })
    }
    img.src = this.props.src
  }

  render() {
    const { classes } = this.props

    if (this.state.error) {
      return (
        <div>
          <CircularProgress className={classes.progress} />
        </div>
      )
    } else if (!this.state.loaded) {
      return (
        <div>
          <CircularProgress className={classes.progress} />
        </div>
      )
    }
    return <img alt={this.props.title} src={this.props.src} title={this.props.title} />
  }
}

export default withStyles(styleSettings)(LazyImage)
