import React, {Component} from 'react';
import styled from 'styled-components'

const StyledHeader = styled.div`
  & {
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
      ${({openMenu}) => openMenu && `
        left: 230px;
        background: lightgrey;
      `}
  }  
`

const HamburgerHolder = styled.div`
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
      background-color: teal;
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
    ${({openMenu}) => openMenu && `
        left: 0px;
        width: 230px;
        background: lightgrey;
      `}
    `

const NavBarLabel = styled.div`
    //display: block;
    //text-transform: uppercase;
    //font-size: 10px;
    //font-family: "Roboto", "Helvetica Neue", Arial, sans-serif;
    //color: black;
    //letter-spacing: 1px;
    //opacity: .3;
    //white-space: nowrap;
`

const MenuLink = styled.div`
    //color: black;
    //display: block;
    //font-size: 14px;
    //border-radius: 2px;
    //transition: all 0.2s ease-in-out;
    //width: 60px;
`

const MenuItem = styled.div`
    //display: flex;
    //align-items: center;
    //justify-content: flex-start;
    //padding: 0 15px;
    //height: 40px;
    //letter-spacing: 0.2px;
    //font-size: .85rem;
`

const MenuIconHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60px;
`

const MenuIcon = styled.div`
  font-size: 22px;
  transition: all 0.2s ease-in-out;
`

class Header extends Component {
    render() {
        return (
            <div>
                <StyledHeader openMenu={this.props.menuIsOpen}>
                    <HamburgerHolder onClick={this.props.toggle}>
                        <i className="icon ion-navicon-round"/>
                    </HamburgerHolder>

                    <NavBar openMenu={this.props.menuIsOpen}>

                        <MenuIconHolder>
                            <MenuIcon>
                                <i className="menu-item-icon icon ion-ios-home-outline tx-22"></i>
                            </MenuIcon>
                        </MenuIconHolder>

                    </NavBar>

                </StyledHeader>
            </div>
        );
    }
}

export default Header;