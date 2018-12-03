import React, { Component } from "react";
import axios from "axios";

import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import {
    withStyles,
    Theme,
    WithStyles,
    createStyles
} from "@material-ui/core/styles";

import GameInfoContents from "./Components/GameInfoContents";
import TablePaginationActionsWrapped from "./Components/TablePaginationActionWrapped";

import { HobbiesState } from "./module";
import { ActionDispatcher } from "./Container";

import PageTitleWrapper from "../../Shared/Styles/PageTitleWrapper";
import { MIN_TABLET_SIZE } from "../../Shared/Styles/StyleConstants";

const StyledTablePagination = withStyles({
    toolbar: {
        padding: 0
    }
})(TablePagination);

const styleSettings = (theme: Theme) =>
    createStyles({
        paper: {
            margin: "5vh auto",
            overflowX: "auto",
            [theme.breakpoints.down(MIN_TABLET_SIZE)]: {
                width: "90%"
            },
            [theme.breakpoints.up(MIN_TABLET_SIZE)]: {
                width: "60%"
            }
        },
        progress: {
            margin: theme.spacing.unit * 2
        }
    });

interface IProps extends WithStyles<typeof styleSettings> {
    value: HobbiesState;
    actions: ActionDispatcher;
}

class Hobbies extends Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);

        this.props.actions.requestFetchingUserOwnedGameInfo();
    }

    private handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        page: number
    ) => {
        this.props.actions.changeOwnedGameInfoPage(page);
    };

    public render() {
        const { classes } = this.props;

        const renderCompletedFetching = (
            <Table>
                <TableBody>
                    {this.props.value.rows
                        .slice(
                            this.props.value.page *
                                this.props.value.rowsPerPage,
                            this.props.value.page *
                                this.props.value.rowsPerPage +
                                this.props.value.rowsPerPage
                        )
                        .map(row => {
                            return (
                                <TableRow key={row.appid}>
                                    <TableCell
                                        style={{
                                            textAlign: "center"
                                        }}
                                    >
                                        <GameInfoContents {...row} />
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <StyledTablePagination
                            rowsPerPageOptions={[]}
                            count={this.props.value.rows.length}
                            rowsPerPage={this.props.value.rowsPerPage}
                            labelRowsPerPage=""
                            page={this.props.value.page}
                            onChangePage={this.handleChangePage}
                            ActionsComponent={TablePaginationActionsWrapped}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        );

        return (
            <div>
                <PageTitleWrapper>Hobbies</PageTitleWrapper>
                <Paper className={classes.paper}>
                    <Typography variant="subtitle1" gutterBottom>
                        Steam等でFPSかストラテジーのゲームを中心に買ってPCで遊んでいます。映画を見たりもします。
                    </Typography>
                    <hr />
                    <Typography variant="h6">Steam ライブラリ</Typography>
                    {this.props.value.isFetching ? (
                        <div>
                            <CircularProgress className={classes.progress} />
                        </div>
                    ) : (
                        renderCompletedFetching
                    )}
                </Paper>
            </div>
        );
    }
}

export default withStyles(styleSettings)(Hobbies);
