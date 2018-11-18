import React, { Component } from "react";
import { IconContext } from "react-icons";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {
    withStyles,
    Theme,
    WithStyles,
    createStyles
} from "@material-ui/core/styles";

import styles from "./Navbar.module.scss";

const styleSettings = (theme: Theme) =>
    createStyles({
        root: {
            background: "#df4848"
        },
        grow: {
            flex: 1
        }
    });

interface IProps extends WithStyles<typeof styleSettings> {
    drawToggleClickHandler(): void;
}

class Navbar extends Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    public render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar position="static" className={classes.root}>
                    <Toolbar>
                        <div
                            className={styles.toggleButton}
                            onClick={this.clickHandler}
                        >
                            <IconContext.Provider
                                value={{ color: "white", size: "1.5em" }}
                            >
                                <MdMenu />
                            </IconContext.Provider>
                        </div>
                        <Link to="/" className={styles.title}>
                            roottool's portfolio
                        </Link>
                        <div className={classes.grow} />
                        <div className={styles.navigationItems}>
                            <ul>
                                <Link to="/about">
                                    <li>about</li>
                                </Link>
                                <Link to="/works">
                                    <li>Works</li>
                                </Link>
                                <Link to="/skills">
                                    <li>Skills</li>
                                </Link>
                            </ul>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }

    private clickHandler() {
        this.props.drawToggleClickHandler();
    }
}

export default withStyles(styleSettings)(Navbar);
