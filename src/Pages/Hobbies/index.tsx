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

import stlyes from "./Hobbies.module.scss";
import GameInfoContents from "./Components/GameInfoContents";
import TablePaginationActionWrapped from "./Components/TablePaginationActionWrapped";

import { HobbiesState } from "./module";
import { ActionDispatcher } from "./Container";

const StyledTablePagination = withStyles({
    toolbar: {
        padding: 0
    }
})(TablePagination);

const styleSettings = (theme: Theme) =>
    createStyles({
        progress: {
            margin: theme.spacing.unit * 2
        }
    });

interface IProps extends WithStyles<typeof styleSettings> {
    value: HobbiesState;
    actions: ActionDispatcher;
}

const rowsPerPage = 5;

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
                            this.props.value.page * rowsPerPage,
                            this.props.value.page * rowsPerPage + rowsPerPage
                        )
                        .map(row => {
                            return (
                                <TableRow key={row.appid}>
                                    <TableCell
                                        style={{
                                            textAlign: "center"
                                        }}
                                    >
                                        <GameInfoContents
                                            appid={row.appid}
                                            name={row.name}
                                            playtime_forever={
                                                row.playtime_forever
                                            }
                                            img_logo_url={row.img_logo_url}
                                        />
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
                            rowsPerPage={rowsPerPage}
                            labelRowsPerPage=""
                            page={this.props.value.page}
                            onChangePage={this.handleChangePage}
                            ActionsComponent={TablePaginationActionWrapped}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        );

        return (
            <div>
                <h1 className={stlyes.title}>Hobbies</h1>
                <Paper
                    className={stlyes.paper}
                    style={{
                        overflowX: "auto"
                    }}
                >
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
