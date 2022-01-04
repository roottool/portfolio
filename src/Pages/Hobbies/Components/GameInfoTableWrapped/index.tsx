import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import { withStyles } from '@material-ui/core/styles'
import { Component } from 'react'

// redux関連
import { ActionDispatcher } from '../../Container'
import { HobbiesState } from '../../module'
// Components
import EmptyTableRow from '../EmptyTableRow'
import GameInfoContents from '../GameInfoContents'
import TablePaginationActionsWrapped from '../TablePaginationActionWrapped'

const StyledTablePagination = withStyles({
  toolbar: {
    padding: 0,
  },
})(TablePagination)

interface IProps {
  actions: ActionDispatcher
  value: HobbiesState
}

class GameInfoTableWrapped extends Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  public render(): JSX.Element {
    const emptyRows =
      this.props.value.rowsPerPage -
      Math.min(
        this.props.value.rowsPerPage,
        this.props.value.rows.length - this.props.value.page * this.props.value.rowsPerPage
      )

    return (
      <Table>
        <TableBody>
          {this.props.value.rows
            .slice(
              this.firstContentOfThePage(this.props.value.page, this.props.value.rowsPerPage),
              this.lastContentOfThePage(this.props.value.page, this.props.value.rowsPerPage)
            )
            .map((row) => {
              return (
                <TableRow key={row.appid}>
                  <TableCell
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    <GameInfoContents {...row} />
                  </TableCell>
                </TableRow>
              )
            })}
          {emptyRows > 0 && <EmptyTableRow emptyRows={emptyRows} />}
        </TableBody>
        <TableFooter>
          <TableRow>
            <StyledTablePagination
              ActionsComponent={TablePaginationActionsWrapped}
              count={this.props.value.rows.length}
              labelRowsPerPage=""
              onPageChange={this.handlePageChange}
              page={this.props.value.page}
              rowsPerPage={this.props.value.rowsPerPage}
              rowsPerPageOptions={[]}
            />
          </TableRow>
        </TableFooter>
      </Table>
    )
  }

  readonly firstContentOfThePage = (currentPage: number, rowsPerPage: number): number =>
    currentPage * rowsPerPage

  readonly lastContentOfThePage = (currentPage: number, rowsPerPage: number): number =>
    currentPage * rowsPerPage + rowsPerPage

  readonly handlePageChange = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    page: number
  ): void => {
    this.props.actions.changeOwnedGameInfoPage(page)
  }
}

export default GameInfoTableWrapped
