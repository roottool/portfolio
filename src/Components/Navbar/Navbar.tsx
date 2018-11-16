import * as React from 'react';
import { IconContext } from "react-icons";
import { MdMenu } from 'react-icons/md';
import { Link } from "react-router-dom";

import styles from './Navbar.module.scss';

interface IProps {
    drawToggleClickHandler(): void,
}

class Navbar extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    };

    public render() {
        return (
            <header className={styles.navbar} style={{ padding: 0 }}>
                <nav className={styles.navigation}>
                    <div className={styles.toggleButton} onClick={this.clickHandler}>
                        <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
                            <MdMenu />
                        </IconContext.Provider>
                    </div>
                    <div>
                        <Link to="/" className={styles.title}>roottool's portfolio</Link>
                    </div>
                    <div className={styles.spacer} style={{ flex: 1 }} />
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
                </nav>
            </header>
        );
    }

    private clickHandler() {
        this.props.drawToggleClickHandler();
    }
}

export default Navbar;
