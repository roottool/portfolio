import React, { Component } from "react";

import { IconContext } from "react-icons";
import { FaTwitterSquare } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import {
    withStyles,
    Theme,
    WithStyles,
    createStyles
} from "@material-ui/core/styles";

import PageTitleWrapper from "../../Shared/Styles/PageTitleWrapper";
import { MIN_TABLET_SIZE } from "../../Shared/Styles/StyleConstants";

const styleSettings = (theme: Theme) =>
    createStyles({
        card: {
            margin: "5vh auto",
            [theme.breakpoints.down(MIN_TABLET_SIZE)]: {
                width: "90%"
            },
            [theme.breakpoints.up(MIN_TABLET_SIZE)]: {
                width: "60%"
            }
        },
        contents: {
            fontSize: "1.5rem",
            textAlign: "center"
        }
    });

class About extends Component<WithStyles<typeof styleSettings>, {}> {
    constructor(props: WithStyles<typeof styleSettings>) {
        super(props);
    }

    public render() {
        const { classes } = this.props;
        return (
            <div>
                <PageTitleWrapper>About</PageTitleWrapper>
                <Card className={classes.card}>
                    <CardContent>
                        <Grid
                            container
                            spacing={24}
                            className={classes.contents}
                        >
                            <Grid item xs={6}>
                                Name
                            </Grid>
                            <Grid item xs={6}>
                                roottool
                            </Grid>
                            <Grid item xs={6}>
                                Birthday
                            </Grid>
                            <Grid item xs={6}>
                                1990/8/15
                            </Grid>
                            <Grid item xs={6}>
                                <a href="https://github.com/roottool">
                                    <IconContext.Provider
                                        value={{ size: "3em" }}
                                    >
                                        <GoMarkGithub />
                                    </IconContext.Provider>
                                </a>
                            </Grid>
                            <Grid item xs={6}>
                                <a href="https://twitter.com/roottool">
                                    <IconContext.Provider
                                        value={{ size: "3em" }}
                                    >
                                        <FaTwitterSquare />
                                    </IconContext.Provider>
                                </a>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default withStyles(styleSettings)(About);
