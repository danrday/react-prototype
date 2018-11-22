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
        subItems: [
            {
                link: '/sub1',
                className: 'icon ion-ios-home-outline',
                navItemText: 'Subpage 1',
            },
            {
                link: '/sub2',
                className: 'icon ion-ios-home-outline',
                navItemText: 'Subpage 2!',
            },
        ],
    },
    {
        link: '/test/page3',
        className: 'icon ion-ios-email-outline',
        navItemText: 'Other Page',
    },
]

class NavAndHeader extends Component {
    state = {
        selected: null,
        selectedSubItem: null
    }
    handleSelected(i) {
        this.setState({ selected: i })
    }
    handleSelectedSubItem(i) {
        this.setState({selectedSubItem: i})
    }
    render() {
        return (
            <StyledHeader openNav={this.props.navIsOpen}>
                <div className="hamburgerFrame" onClick={this.props.toggle}>
                    <div className="iconFrame">
                        <i className="hamburger icon ion-navicon-round" />
                        <i className="close icon ion-close" />
                    </div>
                </div>

                <div className="projectTitle">
                    <h4>Title</h4>
                </div>

                <NavBar
                    onMouseEnter={() => this.props.hover(true)}
                    onMouseLeave={() => this.props.hover(false)}
                    openNav={this.props.navIsOpen}
                    hoverNav={this.props.navIsHovered}
                >
                    {navLinks.map((item, i) => {
                        const isSelected = i === this.state.selected
                        const subItems = item.subItems
                        return (
                            <div key={item.link}>
                                <Link href={item.link}>
                                    <NavItem
                                        onClick={() => {
                                            this.handleSelected(i)
                                        }}
                                        isSelected={isSelected}
                                    >
                                        <div className="navIconFrame">
                                            <div className="navIcon">
                                                <i className={item.className} />
                                            </div>
                                        </div>
                                        <div className="navItemText">
                                            {item.navItemText}
                                        </div>
                                    </NavItem>
                                </Link>

                                {isSelected &&
                                    subItems &&
                                    subItems.map((item, i) => {
                                        const isSelectedSubItem = i === this.state.selectedSubItem
                                        return (
                                            <Link
                                                href={item.link}
                                                key={item.link}
                                            >
                                                <NavItem
                                                    onClick={() => {
                                                        this.handleSelectedSubItem(i)
                                                    }}
                                                    isSelected={isSelectedSubItem}
                                                >
                                                    <div className="navIconFrame">
                                                        <div className="navIcon">
                                                            <i
                                                                className={
                                                                    item.className
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="navItemText">
                                                        {item.navItemText}
                                                    </div>
                                                </NavItem>
                                            </Link>
                                        )
                                    })}
                            </div>
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
        // left: 170px;
        // background: lightgrey;
      `}
    .projectTitle {
        font-family: 'Poppins', 'Helvetica Neue', Arial, sans-serif;
        font-size: 2rem;
        margin-right: 20px;
        margin-bottom: 0px;
        letter-spacing: -1px;
    }
    .iconFrame {
        .close {
            position: absolute;
            opacity: 0;
        }
        .hamburger {
            opacity: 1;
        }
        transition: all 0.2s ease-in-out;
        ${({ openNav }) =>
            openNav &&
            `       
              .close {
                  position: relative;
                  opacity: 1;
              }
              .hamburger {
                  opacity: 0;
                  position: absolute;
              }
            -webkit-transform: rotate(90deg);
            -moz-transform: rotate(90deg);
            -ms-transform: rotate(90deg);
            -o-transform: rotate(90deg);
            transform: rotate(90deg);
          `}
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
        ${({ openNav }) =>
            openNav &&
            `
            margin-left: 120px;
            background-color: #fff6f5;

          `}
        &:hover {
            background-color: #e5fdff;
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
    background-color: #d1e8e3;
    transition: all 0.2s ease-in-out;
    padding-top: 15px;
    ${({ openNav, hoverNav }) =>
        (openNav || hoverNav) &&
        `
        left: 0px;
        width: 180px;
        background: #d6ebf2;
      `}
`

const NavItem = styled.div`
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

    ${({ isSelected }) =>
        isSelected &&
        `
        background-color: white;
        `}

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

export default NavAndHeader
