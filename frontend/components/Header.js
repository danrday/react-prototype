import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const navLinks = [
    {
        link: '/',
        className: 'icon ion-ios-home-outline',
        navItemText: 'Dashboard',
    },
    {
        link: '/page2',
        className: 'icon ion-ios-photos-outline',
        navItemText: 'A Page',
    },
    {
        link: '/test/page3',
        className: 'icon ion-ios-email-outline',
        navItemText: 'Other Page',
    },
]

class Header extends Component {
    state = {
        hovering: false,
    }
    handleHover = () => {
        this.setState({ hovering: !this.state.hovering })
    }
    render() {
        return (
            <StyledHeader openNav={this.props.navIsOpen}>
                <div className="hamburgerFrame" onClick={this.props.toggle}>
                    <i className="icon ion-navicon-round" />
                </div>

                <div className="projectTitle">
                    <h4>Title</h4>
                </div>

                <NavBar
                    onMouseEnter={() => this.props.hover(true)}
                    onMouseLeave={() => this.props.hover(false)}
                    openNav={this.props.navIsOpen}
                >
                    {navLinks.map(function(item, i) {
                        return (
                            <Link href={item.link} key={item.link}>
                                <div className="navItem">
                                    <div className="navIconFrame">
                                        <div className="navIcon">
                                            <i className={item.className} />
                                        </div>
                                    </div>

                                    <div className="navItemText">
                                        {item.navItemText}
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </NavBar>
            </StyledHeader>
        )
    }
}

const StyledHeader = styled.div`
        height: 60px;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 1030;
        background-color: #fff;
        box-shadow: 0 1px 4px 0px rgba(0, 0, 0, 0.16);
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: all 0.2s ease-in-out;
        ${({ openNav }) =>
            openNav &&
            `
        left: 230px;
        background: lightgrey;
      `}
    .projectTitle {
        font-family: 'Poppins', 'Helvetica Neue', Arial, sans-serif;
        font-size: 2rem;
        margin-right: 20px;
        margin-bottom: 0px;
        letter-spacing: -1px;
    }
    .hamburgerFrame {
        width: 60px;
        height: 60px;
        border-right: 1px solid rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #868e96;
        font-size: 20px;
        transition: all 0.2s ease-in-out;
        &:hover {
            background-color: lightsteelblue;
        }
    }
`

const NavBar = styled.div`
    position: fixed;
    top: 60px;
    left: 0px;
    bottom: 0;
    z-index: 100;
    width: 60px;
    background-color: lightgrey;
    transition: all 0.2s ease-in-out;
    padding-top: 15px;
    ${({ openNav }) =>
        openNav &&
        `
        left: 0px;
        width: 230px;
        background: lightgrey;
      `}
      
    .navItem {
        display: flex;
        flex-direction: row;
        align-items: center;
        overflow-x: hidden;
        height: 30px;
        transition: all 0.2s ease-in-out;
        &:hover {
            background-color: mintcream;
            cursor: pointer;
        }
    }
    .navIconFrame {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 60px;
        position: fixed;
    }
    .navIcon {
      font-size: 22px;
      transition: all 0.2s ease-in-out;
    }
    .navItemText {
        white-space: nowrap;
        margin-left: 65px;
        margin-right: auto;
        letter-spacing: 0.2px;
        font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
        font-size: 14px;
    }
`

export default Header
