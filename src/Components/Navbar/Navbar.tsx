import * as React from 'react';
import './Navbar.css';

interface IProps {
    drawToggleClickHandler(): void,
}

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

class Navbar extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    };

    public render() {
        return (
            <header className="navbar">
                <nav className="navbar__navigation">
                    <div className="navbar__toggle-button">
                        <DrawerToggleButton clickHandler={this.clickHandler}/>
                    </div>
                    <div>
                        <a href="/" className="navbar__title">roottool's portfolio</a>
                    </div>
                    <div className="spacer" />
                    <div className="navbar__navigation-items">
                        <ul>
                            <li>
                                <a href="/">About</a>
                            </li>
                            <li>
                                <a href="/">Work</a>
                            </li>
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