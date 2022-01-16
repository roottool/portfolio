import { CircularProgress } from '@material-ui/core'
import { createStyles, withStyles, type Theme, type WithStyles } from '@material-ui/core/styles'
import BrokenImageIcon from '@material-ui/icons/BrokenImage'
import { useEffect, useRef, useState } from 'react'

interface Props {
  src: string
  title: string
}

const LoadingComponent = ({ classes: { progress } }: WithStyles<typeof loadingComponentStyle>) => (
  <CircularProgress className={progress} />
)

const BrokenImageIconComponent = ({
  classes: { root },
}: WithStyles<typeof brokenImageIconComponentStyle>) => <BrokenImageIcon className={root} />

const loadingComponentStyle = (theme: Theme) =>
  createStyles({
    progress: {
      margin: theme.spacing() * 2,
    },
  })
const StyledLoadingComponent = withStyles(loadingComponentStyle)(LoadingComponent)

const brokenImageIconComponentStyle = (theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing() * 2,
    },
  })
const StyledBrokenImageIconComponent = withStyles(brokenImageIconComponentStyle)(
  BrokenImageIconComponent
)

/**
 * 参考URL
 *
 * https://stackoverflow.com/questions/53502271/react-img-tag-add-class-on-load
 */
const useLazyImage = (src: Props['src']) => {
  const imgRef = useRef(new Image())
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (!imgRef.current.src) {
      imgRef.current.src = src
      imgRef.current.onload = () => setIsLoading(false)
      imgRef.current.onerror = () => setIsError(true)
    }
  }, [imgRef, isLoading, setIsLoading, setIsError, src])

  return { isError, isLoading }
}

const LazyImage = ({ src, title }: Props) => {
  const { isError, isLoading } = useLazyImage(src)
  if (isLoading) {
    return <StyledLoadingComponent />
  }

  if (isError) {
    return <StyledBrokenImageIconComponent />
  }

  return <img alt={title} src={src} title={title} />
}

export default LazyImage
