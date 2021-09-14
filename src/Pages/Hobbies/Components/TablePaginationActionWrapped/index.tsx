import IconButton from '@material-ui/core/IconButton'
import type { TablePaginationActionsProps } from '@material-ui/core/TablePagination/TablePaginationActions'
import { withStyles, Theme, WithStyles } from '@material-ui/core/styles'
import FirstPageIcon from '@material-ui/icons/FirstPage'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import LastPageIcon from '@material-ui/icons/LastPage'
import { Component, MouseEvent } from 'react'

const actionsStyles = (theme: Theme) => ({
  root: {
    color: theme.palette.text.secondary,
    flexShrink: 0,
  },
})

interface IProps extends TablePaginationActionsProps, WithStyles<typeof actionsStyles> {
  count: number
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => void
  page: number
  rowsPerPage: number
  theme: Theme
}

class TablePaginationActionsWrapped extends Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  handleFirstPageButtonClick = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent> | null
  ) => {
    this.props.onPageChange(event, 0)
  }

  handleBackButtonClick = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent> | null
  ) => {
    this.props.onPageChange(event, this.props.page - 1)
  }

  handleNextButtonClick = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent> | null
  ) => {
    this.props.onPageChange(event, this.props.page + 1)
  }

  handleLastPageButtonClick = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent> | null
  ) => {
    this.props.onPageChange(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1)
    )
  }

  render() {
    const { classes, count, page, rowsPerPage, theme } = this.props

    return (
      <div className={classes.root}>
        <IconButton
          aria-label="First Page"
          disabled={page === 0}
          onClick={this.handleFirstPageButtonClick}
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          aria-label="Previous Page"
          disabled={page === 0}
          onClick={this.handleBackButtonClick}
        >
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </IconButton>
        <IconButton
          aria-label="Next Page"
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          onClick={this.handleNextButtonClick}
        >
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </IconButton>
        <IconButton
          aria-label="Last Page"
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          onClick={this.handleLastPageButtonClick}
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    )
  }
}

export default withStyles(actionsStyles, { withTheme: true })(
  TablePaginationActionsWrapped
)
