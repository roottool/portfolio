import * as React from "react";
import { Link } from "react-router-dom";

import styles from "./SideDrawer.module.scss";

interface IProps {
    show: boolean;
    drawToggleClickHandler(): void;
}

class SideDrawer extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    public render() {
        let drawerClasses = [`${styles.sideDrawer}`];

        if (this.props.show) {
            drawerClasses = [`${styles.sideDrawer}`, `${styles.open}`];
        }

        return (
            <nav className={drawerClasses.join(" ")}>
                <div className={styles.titleArea}>
                    <p className={styles.title}>Menu</p>
                </div>
                <ul>
                    <Link to="/about">
                        <li onClick={this.clickHandler}>About</li>
                    </Link>
                    <Link to="/works">
                        <li onClick={this.clickHandler}>Works</li>
                    </Link>
                    <Link to="/skills">
                        <li onClick={this.clickHandler}>Skills</li>
                    </Link>
                    <Link to="/hobbies">
                        <li onClick={this.clickHandler}>Hobbies</li>
                    </Link>
                </ul>
            </nav>
        );
    }

    private clickHandler() {
        this.props.drawToggleClickHandler();
    }
}

export default SideDrawer;
