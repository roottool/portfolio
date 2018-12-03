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

import PageTitleWrapper from "../../Shared/Styles/PageTitleWrapper";
import contents from "./WorksContents.json";

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
            height: "350px",
            marginBottom: "30px"
        },
        sourceLink: {
            margin: "0 auto"
        }
    });

const sourceCodeLinkLabel = "ソースコード";

class Works extends Component<WithStyles<typeof styleSettings>, {}> {
    constructor(props: WithStyles<typeof styleSettings>) {
        super(props);
    }

    public render() {
        const { classes } = this.props;
        return (
            <div>
                <PageTitleWrapper>Works</PageTitleWrapper>
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
                                        {item.tools}
                                        <br />
                                        {item.text}
                                    </Typography>
                                    <CardActions>
                                        <Button
                                            color="primary"
                                            href={item.href}
                                            className={classes.sourceLink}
                                        >
                                            {sourceCodeLinkLabel}
                                        </Button>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}

export default withStyles(styleSettings)(Works);
