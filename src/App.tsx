import * as React from "react";
import { Route, Switch } from "react-router-dom";
import styled, { createGlobalStyle, css } from "styled-components";

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

import backgroundImagePNG from "./images/EchoCat.png";
import backgroundImageWebP from "./images/EchoCat.webp";

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

    // FirefoxはWebPに対応していないので、背景画像にPNGを使用する
    // 参考URL
    // http://cly7796.net/wp/javascript/make-a-determination-using-the-useragent-in-javascript/
    readonly ua = navigator.userAgent.toLowerCase();
    readonly isFirefox = this.ua.indexOf("firefox") > -1;

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
                <GlobalStyle isFirefox={this.isFirefox} />
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

interface IGlobalStyleProps {
    isFirefox: boolean;
}

const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        ${(props: IGlobalStyleProps) =>
            props.isFirefox
                ? css`
                      background-image: url(${backgroundImagePNG});
                  `
                : css`
                      background-image: url(${backgroundImageWebP});
                  `}
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
