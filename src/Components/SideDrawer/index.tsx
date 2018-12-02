import * as React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

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

    & ul {
        height: 100%;
        padding: 0 0;
        margin: 0 0;
        list-style: none;
        justify-content: center;
    }

    & li {
        padding: 1rem 0;
        padding-left: 1rem;
        border-bottom: thin solid black;
        color: black;
    }

    & li:hover,
    & li:active {
        background-color: #c2203b;
    }

    & a {
        text-decoration: none;
        font-size: 1.2rem;
    }

    @media (min-width: 769px) {
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
