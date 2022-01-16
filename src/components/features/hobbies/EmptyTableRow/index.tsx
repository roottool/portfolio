import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import { withStyles, createMuiTheme } from '@material-ui/core/styles'
import { Component } from 'react'

interface Props {
  emptyRows: number
}

/**
 * Material-UIの画面幅分岐メソッドを使用するために定義
 */
const theme = createMuiTheme()

class EmptyTableRow extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  public render(): JSX.Element {
    return (
      <this.StyledEmptyTableRow>
        <TableCell />
      </this.StyledEmptyTableRow>
    )
  }

  /**
   * 1つにまとめた空行の高さは、
   *
   * "1行の高さの実測値 * 空行数 * 境界線(1px)数"とする
   */
  readonly StyledEmptyTableRow = withStyles({
    root: {
      [theme.breakpoints.up('xs')]: {
        height: `calc(168px * ${this.props.emptyRows} + ${this.props.emptyRows}px)`,
      },
      [theme.breakpoints.up('sm')]: {
        height: `calc(124px * ${this.props.emptyRows} + ${this.props.emptyRows}px)`,
      },
      [theme.breakpoints.up('md')]: {
        height: `calc(80px * ${this.props.emptyRows} + ${this.props.emptyRows}px)`,
      },
    },
  })(TableRow)
}

export default EmptyTableRow
