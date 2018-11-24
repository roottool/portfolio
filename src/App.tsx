import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import styles from "./App.module.scss";

import Backdrop from "./Components/Backdrop";
import Navbar from "./Components/Navbar";
import SideDrawer from "./Components/SideDrawer";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Works from "./Pages/Works";

interface ISideDrawerState {
    isOpen: boolean;
}

class App extends React.Component<{}, ISideDrawerState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isOpen: false
        };

        this.drawToggleClickHandler = this.drawToggleClickHandler.bind(this);
        this.backdropClickHandler = this.backdropClickHandler.bind(this);
    }

    public render() {
        let backDrop;
        const sideDrawerOption = {
            show: this.state.isOpen,
            drawToggleClickHandler: this.drawToggleClickHandler
        };

        if (this.state.isOpen) {
            backDrop = (
                <Backdrop backdropClickHandler={this.backdropClickHandler} />
            );
        }

        return (
            <Router>
                <div className="App">
                    <Navbar
                        drawToggleClickHandler={this.drawToggleClickHandler}
                    />
                    <SideDrawer {...sideDrawerOption} />
                    {backDrop}
                    <main className={styles.main}>
                        <Switch>
                            <Route path="/about" component={About} />
                            <Route path="/works" component={Works} />
                            <Route path="/skills" component={Skills} />
                            <Route path="/" component={Home} />
                            <Route component={Home} />
                        </Switch>
                    </main>
                </div>
            </Router>
        );
    }

    private drawToggleClickHandler = () => {
        this.setState(prevState => {
            return { isOpen: !prevState.isOpen };
        });
    };

    private backdropClickHandler = () => {
        this.setState({ isOpen: false });
    };
}

export default App;
