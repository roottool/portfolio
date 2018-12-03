import React, { Component } from "react";
import { IconContext } from "react-icons";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {
    withStyles,
    Theme,
    WithStyles,
    createStyles
} from "@material-ui/core/styles";

import {
    MAX_SMARTPHONE_SIZE,
    MIN_TABLET_SIZE
} from "../../Shared/Styles/StyleConstants";

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
    }

    public render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar position={"static"} className={classes.root}>
                    <Toolbar>
                        <MenuIconWrapper onClick={this.clickHandler}>
                            <IconContext.Provider
                                value={{ color: "white", size: "1.5em" }}
                            >
                                <MdMenu />
                            </IconContext.Provider>
                        </MenuIconWrapper>
                        <TitleWrapper to="/">roottool's portfolio</TitleWrapper>
                        <GrowWrapper />
                        <NavigationItemsWrapper>
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
                                <Link to="/hobbies">
                                    <li>Hobbies</li>
                                </Link>
                            </ul>
                        </NavigationItemsWrapper>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }

    private clickHandler = () => {
        this.props.drawToggleClickHandler();
    };
}

export default withStyles(styleSettings)(Navbar);

const MenuIconWrapper = styled.div`
    @media (min-width: ${MIN_TABLET_SIZE}px) {
        display: none;
    }
`;

const TitleWrapper = styled(Link)`
    color: white;
    font-size: 1.5rem;
    padding: 0 1rem;
    text-decoration: none;
    @media (min-width: ${MIN_TABLET_SIZE}px) {
        padding: 0 0rem;
    }
`;

const GrowWrapper = styled.div`
    flex: 1;
`;

const NavigationItemsWrapper = styled.div`
    height: 100%;

    & ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
    }

    & li {
        padding: 16px 1rem;
    }

    & a {
        color: white;
        text-decoration: none;
    }

    @media (max-width: ${MAX_SMARTPHONE_SIZE}px) {
        display: none;
    }
`;
