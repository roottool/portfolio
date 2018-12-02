import * as React from "react";
import { Route, Switch } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import Backdrop from "./Components/Backdrop";
import Navbar from "./Components/Navbar";
import SideDrawer from "./Components/SideDrawer";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Works from "./Pages/Works";
import Hobbies from "./Pages/Hobbies/Container";

import { AppState } from "./module";
import { ActionDispatcher } from "./Container";

interface IProps {
    value: AppState;
    actions: ActionDispatcher;
}

class App extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
    }

    private menuIconClickHandler = () => {
        this.props.actions.openSideMenu();
    };

    private closeSideMenuHandler = () => {
        this.props.actions.closeSideMenu();
    };

    public render() {
        let backDrop;
        const sideDrawerOption = {
            show: this.props.value.isOpened,
            drawToggleClickHandler: this.closeSideMenuHandler
        };

        if (this.props.value.isOpened) {
            backDrop = (
                <Backdrop backdropClickHandler={this.closeSideMenuHandler} />
            );
        }

        return (
            <div className="App">
                <GlobalStyle />
                <Navbar drawToggleClickHandler={this.menuIconClickHandler} />
                <SideDrawer {...sideDrawerOption} />
                {backDrop}
                <MainWrapper>
                    <Switch>
                        <Route path="/about" component={About} />
                        <Route path="/works" component={Works} />
                        <Route path="/skills" component={Skills} />
                        <Route path="/hobbies" component={Hobbies} />
                        <Route path="/" component={Home} />
                        <Route component={Home} />
                    </Switch>
                </MainWrapper>
            </div>
        );
    }
}

export default App;

const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background-image: url('./images/EchoCat.png');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: right bottom;
        background-size: 38% 38%;
    }
`;

const MainWrapper = styled.main`
    height: 100%;
    text-align: center;
`;
