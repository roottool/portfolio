import { useMediaQuery, TableCell, TableRow } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import { useMemo } from 'react'
import styled from 'styled-components'

interface Props {
  emptyRows: number
}
interface StyledEmptyTableRowProps {
  height: string
}

const StyledEmptyTableRow = styled(TableRow)`
  height: ${({ height }: StyledEmptyTableRowProps) => height};
`

const useFetchHeight = (emptyRows: Props['emptyRows']) => {
  const theme = useTheme()
  const canMatchXs = useMediaQuery(theme.breakpoints.up('xs'))
  const canMatchSm = useMediaQuery(theme.breakpoints.up('sm'))
  /**
   * 1つにまとめた空行の高さは、
   *
   * "1行の高さの実測値 * 空行数 * 境界線(1px)数"とする
   */
  const fetchHeight = () => {
    if (canMatchXs) {
      return `calc(168px * ${emptyRows} + ${emptyRows}px)`
    } else if (canMatchSm) {
      return `calc(124px * ${emptyRows} + ${emptyRows}px)`
    } else {
      return `calc(80px * ${emptyRows} + ${emptyRows}px)`
    }
  }
  const height = useMemo(fetchHeight, [canMatchSm, canMatchXs, emptyRows])

  return height
}

const EmptyTableRow = ({ emptyRows }: Props) => {
  const height = useFetchHeight(emptyRows)

  return (
    <StyledEmptyTableRow height={height}>
      <TableCell />
    </StyledEmptyTableRow>
  )
}

export default EmptyTableRow
