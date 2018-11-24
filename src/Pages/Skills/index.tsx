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
import contents from "./SkillsContents.json";

const styleSettings = (theme: Theme) =>
    createStyles({
        container: {
            maxWidth: "1200px",
            margin: "5vh auto"
        },
        cardGrid: {
            padding: "0 16px"
        },
        card: {
            height: "300px",
            marginBottom: "30px"
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
                <Grid container className={classes.container}>
                    {contents.map((item, key) => (
                        <Grid
                            item
                            key={key}
                            xs={12}
                            sm={6}
                            md={4}
                            className={classes.cardGrid}
                        >
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {item.text}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}

export default withStyles(styleSettings)(Skills);
