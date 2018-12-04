import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LazyImage from "../../../../Components/lazyImage";

interface IProps {
    appid: number;
    name: string;
    playtime_forever: number;
    img_logo_url: string;
}

class GameInfoContents extends Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <Grid container spacing={16}>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    style={{
                        margin: "auto"
                    }}
                >
                    <a
                        href={`https://store.steampowered.com/app/${
                            this.props.appid
                        }/`}
                    >
                        <LazyImage
                            src={`http://media.steampowered.com/steamcommunity/public/images/apps/${
                                this.props.appid
                            }/${this.props.img_logo_url}.jpg`}
                            title={this.props.name}
                        />
                    </a>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    style={{
                        margin: "auto"
                    }}
                >
                    <Typography variant="subtitle1">
                        {this.props.name}
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    style={{
                        margin: "auto"
                    }}
                >
                    <Typography variant="subtitle1">
                        プレイ時間:
                        {Math.round(this.props.playtime_forever / 60)}
                        時間
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}

export default GameInfoContents;
