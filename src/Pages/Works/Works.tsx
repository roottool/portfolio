import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
    withStyles,
    Theme,
    WithStyles,
    createStyles
} from "@material-ui/core/styles";

import styles from "./Works.module.scss";

const styleSettings = (theme: Theme) =>
    createStyles({
        container: {
            maxWidth: "1200px",
            margin: "5vh auto"
        },
        cardGrid: {
            paddingLeft: "15px",
            paddingRight: "15px"
        },
        card: {
            maxWidth: "400px",
            height: "350px",
            marginBottom: "30px",
            marginLeft: "auto",
            marginRight: "auto"
        },
        sourceLink: {
            margin: "0 auto"
        }
    });

class Works extends Component<WithStyles<typeof styleSettings>, {}> {
    constructor(props: WithStyles<typeof styleSettings>) {
        super(props);
    }

    public render() {
        const { classes } = this.props;
        return (
            <div>
                <h1 className={styles.title}>Works</h1>
                <Grid container spacing={0} className={classes.container}>
                    <Grid xs={12} lg={4} className={classes.cardGrid}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Cookie☆Sound
                                </Typography>
                                <Typography variant="subtitle1">
                                    C# + Firebase
                                    <br />
                                    Firebaseからローカルにダウンロードした、音声ファイルを再生するGUIチャットアプリです。
                                    IRCチャットサーバの同じチャットルーム内のメンバーに対して、ローカルの音声ファイルを再生させることが可能です。
                                </Typography>
                                <CardActions>
                                    <Button
                                        color="primary"
                                        href="https://github.com/roottool/Cookiesound-kari-"
                                        className={classes.sourceLink}
                                    >
                                        ソースコード
                                    </Button>
                                </CardActions>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12} lg={4} className={classes.cardGrid}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Cookie☆☆Sound
                                </Typography>
                                <Typography variant="subtitle1">
                                    Python
                                    <br />
                                    ローカルの音声ファイルを再生するCUIチャットアプリです。
                                    IRCチャットサーバの同じチャットルーム内のメンバーに対して、ローカルの音声ファイルを再生させることが可能です。
                                </Typography>
                                <CardActions>
                                    <Button
                                        color="primary"
                                        href="https://github.com/roottool/CookieSound2"
                                        className={classes.sourceLink}
                                    >
                                        ソースコード
                                    </Button>
                                </CardActions>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12} lg={4} className={classes.cardGrid}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    OrgaSound
                                </Typography>
                                <Typography variant="subtitle1">
                                    Angular 6 + Firebase
                                    <br />
                                    Firebaseから音声ファイルを取得して再生することが出来るWebチャットアプリです。
                                    チャットルーム内のメンバーに対して、Firebase上にある音声ファイルを再生させることが可能です。
                                </Typography>
                                <CardActions>
                                    <Button
                                        color="primary"
                                        href="https://github.com/roottool/OrgaSound"
                                        className={classes.sourceLink}
                                    >
                                        ソースコード
                                    </Button>
                                </CardActions>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12} lg={4} className={classes.cardGrid}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Portfolio site
                                </Typography>
                                <Typography variant="subtitle1">
                                    React
                                    <br />
                                    このポートフォリオです。
                                    Reactの学習のために作成しました。
                                    スマートフォンからの閲覧を考慮したレスポンシブデザインになっています。
                                </Typography>
                                <CardActions>
                                    <Button
                                        color="primary"
                                        href="https://github.com/roottool/roottool.github.io"
                                        className={classes.sourceLink}
                                    >
                                        ソースコード
                                    </Button>
                                </CardActions>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styleSettings)(Works);
