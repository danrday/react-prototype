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
    left: -230px;
    bottom: 0;
    z-index: 100;
    width: 230px;
    background-color: #1D2939;
    //padding-left: 10px;
    //padding-right: 10px;
    transition: all 0.2s ease-in-out;
    ${({openMenu}) => openMenu && `
        left: 0px;
        background: lightgrey;
      `}
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
                    hello
                </NavBar>
                </StyledHeader>
            </div>
        );
    }
}

export default Header;