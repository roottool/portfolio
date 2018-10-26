import * as React from 'react';

import './About.css';

class About extends React.Component {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <main className="main">
                <h1 className="about-page__title">About</h1>
            </main>
        );
    }
}

export default About;