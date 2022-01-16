import { IconButton } from '@material-ui/core'
import type { TablePaginationActionsProps as MuiTablePaginationActionsProps } from '@material-ui/core/TablePagination/TablePaginationActions'
import { withStyles, type Theme, type WithStyles } from '@material-ui/core/styles'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons'
import FirstPageIcon from '@material-ui/icons/FirstPage'
import LastPageIcon from '@material-ui/icons/LastPage'
import { useCallback, useMemo, type MouseEvent } from 'react'

const actionsStyles = (theme: Theme) => ({
  root: {
    color: theme.palette.text.secondary,
    flexShrink: 0,
  },
})

type Props = MuiTablePaginationActionsProps
interface TablePaginationAreaHookProps {
  count: number
  handlePageChange: MuiTablePaginationActionsProps['onPageChange']
  page: number
  rowsPerPage: number
}
type HandleClickEvent = (_event: MouseEvent<HTMLButtonElement> | null) => void
interface TablePaginationActionsProps extends WithStyles<typeof actionsStyles> {
  handleBackButtonClick: HandleClickEvent
  handleFirstPageButtonClick: HandleClickEvent
  handleLastPageButtonClick: HandleClickEvent
  handleNextButtonClick: HandleClickEvent
  isFirstPage: boolean
  isLastPage: boolean
  theme: Theme
}

const TablePaginationActions = ({
  classes: { root },
  handleBackButtonClick,
  handleFirstPageButtonClick,
  handleLastPageButtonClick,
  handleNextButtonClick,
  isFirstPage,
  isLastPage,
  theme,
}: TablePaginationActionsProps) => (
  <div className={root}>
    <IconButton aria-label="First Page" disabled={isFirstPage} onClick={handleFirstPageButtonClick}>
      {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
    </IconButton>
    <IconButton aria-label="Previous Page" disabled={isFirstPage} onClick={handleBackButtonClick}>
      {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
    </IconButton>
    <IconButton aria-label="Next Page" disabled={isLastPage} onClick={handleNextButtonClick}>
      {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
    </IconButton>
    <IconButton aria-label="Last Page" disabled={isLastPage} onClick={handleLastPageButtonClick}>
      {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
    </IconButton>
  </div>
)

const StyledTablePaginationActions = withStyles(actionsStyles, { withTheme: true })(
  TablePaginationActions
)

const useTablePaginationArea = ({
  count,
  handlePageChange,
  page,
  rowsPerPage,
}: TablePaginationAreaHookProps) => {
  const isFirstPage = useMemo(() => page === 0, [page])
  const isLastPage = useMemo(
    () => page >= Math.ceil(count / rowsPerPage) - 1,
    [count, page, rowsPerPage]
  )

  const handleBackButtonClick = useCallback(
    (_event: MouseEvent<HTMLButtonElement> | null) => handlePageChange(_event, page - 1),
    [handlePageChange, page]
  )
  const handleFirstPageButtonClick = useCallback(
    (_event: MouseEvent<HTMLButtonElement> | null) => handlePageChange(_event, 0),
    [handlePageChange]
  )
  const handleLastPageButtonClick = useCallback(
    (_event: MouseEvent<HTMLButtonElement> | null) =>
      handlePageChange(_event, Math.max(0, Math.ceil(count / rowsPerPage) - 1)),
    [count, handlePageChange, rowsPerPage]
  )
  const handleNextButtonClick = useCallback(
    (_event: MouseEvent<HTMLButtonElement> | null) => handlePageChange(_event, page + 1),
    [handlePageChange, page]
  )

  return {
    handleBackButtonClick,
    handleFirstPageButtonClick,
    handleLastPageButtonClick,
    handleNextButtonClick,
    isFirstPage,
    isLastPage,
  }
}

const TablePaginationArea = ({ count, onPageChange, page, rowsPerPage }: Props) => {
  const styledTablePaginationActionsProps = useTablePaginationArea({
    count,
    handlePageChange: onPageChange,
    page,
    rowsPerPage,
  })

  return <StyledTablePaginationActions {...styledTablePaginationActionsProps} />
}

export default TablePaginationArea
