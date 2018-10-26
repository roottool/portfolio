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
                <ul>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Work</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default SideDrawer;