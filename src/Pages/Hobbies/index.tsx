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

interface IGamesInfo {
    appid: number;
    name: string;
    playtime_2weeks: number;
    playtime_forever: number;
    img_icon_url: string;
    img_logo_url: string;
    has_community_visible_stats: boolean;
}

interface IUserOwnedGames {
    response: {
        game_count: number;
        games: [IGamesInfo];
    };
}

interface IState {
    isFetching: boolean;
    rows: IGamesInfo[];
    page: number;
}

const rowsPerPage = 5;

class Hobbies extends Component<WithStyles<typeof styleSettings>, IState> {
    constructor(props: WithStyles<typeof styleSettings>) {
        super(props);

        this.state = {
            isFetching: true,
            rows: [],
            page: 0
        };
        this.fetchUserOwnedGames();
    }

    private async fetchUserOwnedGames() {
        await axios
            .get(
                "https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=0F5E11F09D439A3BF76B230771F957D4&steamid=76561198091104577&include_appinfo=1"
            )
            .then(response => {
                this.setState({ isFetching: false });
                const result: IUserOwnedGames = response.data;
                /**
                 * プレイ時間降順ソート
                 * 参考URL
                 * https://medium.com/@pagalvin/sort-arrays-using-typescript-592fa6e77f1
                 */
                const sortPlayTime = result.response.games.sort(
                    (leftSide, rightSide): number => {
                        if (
                            leftSide.playtime_forever >
                            rightSide.playtime_forever
                        ) {
                            return -1;
                        } else if (
                            leftSide.playtime_forever <
                            rightSide.playtime_forever
                        ) {
                            return 1;
                        }
                        return 0;
                    }
                );
                this.setState({ rows: sortPlayTime });
            })
            .catch(error => {
                console.log(error);
            });
    }

    private handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        page: number
    ) => {
        this.setState({ page: page });
    };

    public render() {
        const { classes } = this.props;

        const renderCompletedFetching = (
            <Table>
                <TableBody>
                    {this.state.rows
                        .slice(
                            this.state.page * rowsPerPage,
                            this.state.page * rowsPerPage + rowsPerPage
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
                            count={this.state.rows.length}
                            rowsPerPage={rowsPerPage}
                            labelRowsPerPage=""
                            page={this.state.page}
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
                    {this.state.isFetching ? (
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
