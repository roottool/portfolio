import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TablePagination,
  TableRow,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { useCallback, useMemo } from 'react'
import styled from 'styled-components'

import EmptyTableRow from '@components/features/hobbies/EmptyTableRow'
import GameInfoContents from '@components/features/hobbies/GameInfoContents'
import TablePaginationActionsWrapped from '@components/features/hobbies/TablePaginationActionWrapped'

import { type ActionDispatcher } from '@/pages/Hobbies/Container'
import { type HobbiesState } from '@/pages/Hobbies/module'

interface Props {
  actions: ActionDispatcher
  value: HobbiesState
}
interface GameInfoTableProps {
  page: HobbiesState['page']
  rows: HobbiesState['rows']
  rowsPerPage: HobbiesState['rowsPerPage']
}
interface GameInfoTableBodyProps extends GameInfoTableProps {
  emptyRows: number
}
interface GameInfoTableHookProps extends GameInfoTableProps {
  changeOwnedGameInfoPage: ActionDispatcher['changeOwnedGameInfoPage']
}

const GameInfoTableBody = ({ emptyRows, page, rows, rowsPerPage }: GameInfoTableBodyProps) => (
  <TableBody>
    {rows
      .slice(firstContentOfThePage(page, rowsPerPage), lastContentOfThePage(page, rowsPerPage))
      .map((row) => {
        return (
          <TableRow key={row.appid}>
            <StyledTableCell>
              <GameInfoContents {...row} />
            </StyledTableCell>
          </TableRow>
        )
      })}
    {emptyRows > 0 && <EmptyTableRow emptyRows={emptyRows} />}
  </TableBody>
)

const StyledTableCell = styled(TableCell)`
  text-align: center;
`

const StyledTablePagination = withStyles({
  toolbar: {
    padding: 0,
  },
})(TablePagination)

const firstContentOfThePage = (currentPage: number, rowsPerPage: number) =>
  currentPage * rowsPerPage
const lastContentOfThePage = (currentPage: number, rowsPerPage: number) =>
  currentPage * rowsPerPage + rowsPerPage
const useGameInfoTable = ({
  changeOwnedGameInfoPage,
  page,
  rows,
  rowsPerPage,
}: GameInfoTableHookProps) => {
  const emptyRows = useMemo(
    () => rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage),
    [page, rows, rowsPerPage]
  )
  const handlePageChange = useCallback(
    (_event: React.MouseEvent<HTMLButtonElement> | null, page: number) =>
      changeOwnedGameInfoPage(page),
    [changeOwnedGameInfoPage]
  )

  return {
    emptyRows,
    handlePageChange,
  }
}

const GameInfoTable = ({
  actions: { changeOwnedGameInfoPage },
  value: { page, rows, rowsPerPage },
}: Props) => {
  const { emptyRows, handlePageChange } = useGameInfoTable({
    changeOwnedGameInfoPage,
    page,
    rows,
    rowsPerPage,
  })

  return (
    <Table>
      <GameInfoTableBody emptyRows={emptyRows} page={page} rows={rows} rowsPerPage={rowsPerPage} />
      <TableFooter>
        <TableRow>
          <StyledTablePagination
            ActionsComponent={TablePaginationActionsWrapped}
            count={rows.length}
            labelRowsPerPage=""
            onPageChange={handlePageChange}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[]}
          />
        </TableRow>
      </TableFooter>
    </Table>
  )
}

export default GameInfoTable
