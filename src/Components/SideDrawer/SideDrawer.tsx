import * as React from 'react';

import './SideDrawer.css';

interface IProps {
    show: boolean,
}

class SideDrawer extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
    };

    public render() {
        let drawerClasses = ['side-drawer'];

        if (this.props.show) {
            drawerClasses = ['side-drawer', 'open'];
        }

        return (
            <nav className={drawerClasses.join(' ')}>
                <div className="side-drawer__title-area">
                    <p className="side-drawer__title">Menu</p>
                </div>
                <ul>
                    <a href="/">
                        <li>
                            About
                        </li>
                    </a>
                    <li>
                        <a href="/">Work</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default SideDrawer;