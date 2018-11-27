import * as React from "react";
import { Route, Switch } from "react-router-dom";

import styles from "./App.module.scss";

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
                <Navbar drawToggleClickHandler={this.menuIconClickHandler} />
                <SideDrawer {...sideDrawerOption} />
                {backDrop}
                <main className={styles.main}>
                    <Switch>
                        <Route path="/about" component={About} />
                        <Route path="/works" component={Works} />
                        <Route path="/skills" component={Skills} />
                        <Route path="/hobbies" component={Hobbies} />
                        <Route path="/" component={Home} />
                        <Route component={Home} />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;
