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

const MenuIconHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60px;
    position: fixed;
`

const MenuIcon = styled.div`
  font-size: 22px;
  transition: all 0.2s ease-in-out;
`

const MenuItemText = styled.div`
  white-space: nowrap;
  margin-left: 65px;
  margin-right: auto;
  letter-spacing: 0.2px;
  font-family: "Roboto", "Helvetica Neue", Arial, sans-serif;
  font-size: 14px;

`

const MenuItem = styled.div`
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
`

class Header extends Component {
    state = {
        hovering: false
    }
    handleHover = () => {
        this.setState({hovering: !this.state.hovering})
    }
    render() {
        return (
            <div>
                <StyledHeader openMenu={this.props.menuIsOpen}>
                    <HamburgerHolder onClick={this.props.toggle}>
                        <i className="icon ion-navicon-round"/>
                    </HamburgerHolder>

                    <NavBar onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} openMenu={this.props.menuIsOpen || this.state.hovering}>

                        <MenuItem>
                            <MenuIconHolder>
                                <MenuIcon>
                                    <i className="icon ion-ios-home-outline"></i>
                                </MenuIcon>
                            </MenuIconHolder>

                            <MenuItemText>
                                Dashboard
                            </MenuItemText>
                        </MenuItem>

                        <MenuItem>
                            <MenuIconHolder>
                                <MenuIcon>
                                    <i className="icon ion-ios-photos-outline"></i>
                                </MenuIcon>
                            </MenuIconHolder>

                            <MenuItemText>
                                A Page
                            </MenuItemText>
                        </MenuItem>

                        <MenuItem>
                            <MenuIconHolder>
                                <MenuIcon>
                                    <i className="icon ion-ios-email-outline"></i>
                                </MenuIcon>
                            </MenuIconHolder>

                            <MenuItemText>
                                Other Page
                            </MenuItemText>
                        </MenuItem>

                    </NavBar>

                </StyledHeader>
            </div>
        );
    }
}

export default Header;