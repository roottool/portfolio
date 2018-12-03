import * as React from "react";
import styled from "styled-components";

import {
    MAX_SMARTPHONE_SIZE,
    MIN_TABLET_SIZE
} from "../../Shared/Styles/StyleConstants";

class Home extends React.Component {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div>
                <TopPageTitleWrapper>
                    Welcome to roottool's portfolio site!
                </TopPageTitleWrapper>
                <p>"Why do it yourself when robots do it better?"</p>
                <p>- echo -</p>
            </div>
        );
    }
}

export default Home;

const TopPageTitleWrapper = styled.h1`
    @media (max-width: ${MAX_SMARTPHONE_SIZE}px) {
        font-size: 2rem;
        margin-top: 20vh;
    }

    @media (min-width: ${MIN_TABLET_SIZE}px) {
        font-size: 3.5rem;
        margin-top: 40vh;
    }
`;
