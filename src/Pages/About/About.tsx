import * as React from 'react';
import { IconContext } from "react-icons";
import { FaTwitterSquare } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';

import stlyes from './About.module.scss';

class About extends React.Component {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div>
                <h1 className={stlyes.title}>About</h1>
                <div className={stlyes.card}>
                    <table className="about-page__table">
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>roottool</td>
                            </tr>
                            <tr>
                                <th>Birthday</th>
                                <td>1990/8/15</td>
                            </tr>
                            <tr className={stlyes.icons}>
                                <td>
                                    <a href="https://github.com/roottool">
                                        <IconContext.Provider value={{ size: "3em" }}>
                                            <GoMarkGithub />
                                        </IconContext.Provider>
                                    </a>
                                </td>
                                <td>
                                    <a href="https://twitter.com/roottool">
                                        <IconContext.Provider value={{ size: "3em" }}>
                                            <FaTwitterSquare />
                                        </IconContext.Provider>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default About;
