import React, { Component } from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
    withStyles,
    Theme,
    WithStyles,
    createStyles
} from "@material-ui/core/styles";

import styles from "./Skills.module.scss";

const styleSettings = (theme: Theme) =>
    createStyles({
        container: {
            maxWidth: "1200px",
            paddingLeft: "5vw",
            paddingRight: "5vw",
            margin: "5vh auto"
        },
        cardGrid: {
            paddingLeft: "15px",
            paddingRight: "15px"
        },
        card: {
            maxWidth: "400px",
            height: "300px",
            marginBottom: "30px",
            marginLeft: "auto",
            marginRight: "auto"
        }
    });

class Skills extends Component<WithStyles<typeof styleSettings>, {}> {
    constructor(props: WithStyles<typeof styleSettings>) {
        super(props);
    }

    public render() {
        const { classes } = this.props;
        return (
            <div>
                <h1 className={styles.title}>Skills</h1>
                <Grid container spacing={0} className={classes.container}>
                    <Grid xs={12} lg={4} className={classes.cardGrid}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    HTML &amp; CSS
                                </Typography>
                                <Typography variant="subtitle1">
                                    フロントエンドの制作で使用しています。
                                    このポートフォリオやOrgaSoundではBootstrap
                                    4を使用しています。 業務ではMaterial Design
                                    Liteを使用しています。
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12} lg={4} className={classes.cardGrid}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    SASS
                                </Typography>
                                <Typography variant="subtitle1">
                                    OrgaSoundの制作で使用しました。
                                    業務で使うかはわかりませんが、使えると便利であると感じたので学習中です。
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12} lg={4} className={classes.cardGrid}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    javascript (jQuery)
                                </Typography>
                                <Typography variant="subtitle1">
                                    業務で使用しています。
                                    主にES5以前の書式でjQueryと共に使用しています。
                                    恐らく2番目に長く使用しています。
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12} lg={4} className={classes.cardGrid}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Typescript
                                </Typography>
                                <Typography variant="subtitle1">
                                    OrgaSoundとこのポートフォリオの制作で使用しました。
                                    業務では一切使用していませんが、使えるとjavascriptより書きやすいので学習中です。
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12} lg={4} className={classes.cardGrid}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Angular 6
                                </Typography>
                                <Typography variant="subtitle1">
                                    OrgaSoundの制作で使用しました。
                                    Firebaseを使用したWebアプリ解説で、Angularを使用していたので学習のために採用しました。
                                    ライブラリはAngular
                                    MaterialとAngularFireを使用しました。
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12} lg={4} className={classes.cardGrid}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    React
                                </Typography>
                                <Typography variant="subtitle1">
                                    このポートフォリオの制作で使用しました。
                                    Typescriptを使いたかったので、このポートフォリオの制作にはTypescriptを採用しました。
                                    ライブラリはrouterとreactstrapを使用しました。
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12} lg={4} className={classes.cardGrid}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    C#
                                </Typography>
                                <Typography variant="subtitle1">
                                    Cookie☆Soundの制作で使用しました。
                                    1番長く使用していますが、業務としては数ヶ月程度の機能追加案件のコーディングに参加した程度です。
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12} lg={4} className={classes.cardGrid}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Python
                                </Typography>
                                <Typography variant="subtitle1">
                                    業務のバックエンドとCookie☆☆Soundの制作で使用しました。
                                    業務ではDjangoと共に使用しています。
                                    恐らく3番目に長く使用しています。
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12} lg={4} className={classes.cardGrid}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Firebase
                                </Typography>
                                <Typography variant="subtitle1">
                                    Cookie☆Sound、OrgaSoundの制作で使用しました。
                                    使用経験のあるサービスはAuthentication、Realtime
                                    Database、Storage、Hostingです。
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12} lg={4} className={classes.cardGrid}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Unity (C#)
                                </Typography>
                                <Typography variant="subtitle1">
                                    Unityで制作されたスマートフォン用アプリのメンテナンスを業務で行っていました。
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12} lg={4} className={classes.cardGrid}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Java (Android)
                                </Typography>
                                <Typography variant="subtitle1">
                                    業務でネイティブ向けライブラリをUnityで制作されたスマートフォンアプリに組み込むため、プラグインの作成を行っていました。
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12} lg={4} className={classes.cardGrid}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Objective-C
                                </Typography>
                                <Typography variant="subtitle1">
                                    業務でネイティブ向けライブラリをUnityで制作されたスマートフォンアプリに組み込むため、プラグインの作成を行っていました。
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styleSettings)(Skills);
