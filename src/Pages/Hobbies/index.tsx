import React, { Component } from "react";
import { Helmet } from "react-helmet";

import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {
    withStyles,
    Theme,
    WithStyles,
    createStyles
} from "@material-ui/core/styles";
// redux関連
import { HobbiesState } from "./module";
import { ActionDispatcher } from "./Container";
// components
import GameInfoTableWrapped from "./Components/GameInfoTableWrapped";
// style
import PageTitleWrapper from "../../Shared/Styles/PageTitleWrapper";
import { MIN_TABLET_SIZE } from "../../Shared/Styles/StyleConstants";

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
            margin: theme.spacing() * 2
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

    public render() {
        const { classes } = this.props;

        return (
            <div>
                <Helmet>
                    <title>Hobbies - roottool's Portfolio Site</title>
                </Helmet>
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
                            <GameInfoTableWrapped {...this.props} />
                        )}
                </Paper>
            </div>
        );
    }
}

export default withStyles(styleSettings)(Hobbies);
