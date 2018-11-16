import * as React from 'react';

import styles from './Home.module.scss';

class Home extends React.Component {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div>
              <h1 className={styles.title}>Welcome to roottool's portfolio site!</h1>
              <p>"Why do it yourself when robots do it better?"</p>
              <p>- echo -</p>
            </div>
        );
    };
}

export default Home;
