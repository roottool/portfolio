import * as React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { MIN_TABLET_SIZE } from "../../Shared/Styles/StyleConstants";

interface ISideDrawerWrapperProps {
    show: boolean;
}

interface IProps extends ISideDrawerWrapperProps {
    drawToggleClickHandler(): void;
}

class SideDrawer extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <SideDrawerWrapper show={this.props.show}>
                <TitleAreaWrapper>
                    <TitleWrapper>Menu</TitleWrapper>
                </TitleAreaWrapper>
                <LinkListWrapper>
                    <LinkWrapper to="/about" onClick={this.clickHandler}>
                        About
                    </LinkWrapper>
                    <LinkWrapper to="/works" onClick={this.clickHandler}>
                        Works
                    </LinkWrapper>
                    <LinkWrapper to="/skills" onClick={this.clickHandler}>
                        Skills
                    </LinkWrapper>
                    <LinkWrapper to="/hobbies" onClick={this.clickHandler}>
                        Hobbies
                    </LinkWrapper>
                </LinkListWrapper>
            </SideDrawerWrapper>
        );
    }

    private clickHandler = () => {
        this.props.drawToggleClickHandler();
    };
}

export default SideDrawer;

const SideDrawerWrapper = styled.nav`
    height: 100%;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    max-width: 300px;
    z-index: 200;
    transform: translateX(-100%);
    transition: transform 0.3s ease-out;
    ${(props: ISideDrawerWrapperProps) =>
        props.show &&
        css`
            box-shadow: 1px 0px 3px rgba(0, 0, 0, 0.5);
            transform: translateX(0);
        `}

    @media (min-width: ${MIN_TABLET_SIZE}px) {
        display: none;
    }
`;

const TitleAreaWrapper = styled.div`
    height: 56px;
    background: #df4848;
`;

const TitleWrapper = styled.p`
    color: white;
    font-size: 1.5rem;
    text-decoration: none;
    padding: 0.5rem 1rem;
    margin: 0;
`;

const LinkListWrapper = styled.div`
    height: 100%;
    padding: 0 0;
    margin: 0 0;
    list-style: none;
    justify-content: center;
`;

const LinkWrapper = styled(Link)`
    display: block;
    padding: 1rem 0;
    padding-left: 1rem;
    border-bottom: thin solid black;
    color: black;
    text-decoration: none;
    font-size: 1.2rem;
    &:hover,
    &:active {
        background-color: #c2203b;
    }
`;
