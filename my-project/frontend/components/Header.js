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

class Header extends Component {
    state = {
        menuIsOpen: true
    }
    render() {
        return (
            <StyledHeader openMenu={this.state.menuIsOpen}>
                <button
                    onClick={() => {
                        this.setState({menuIsOpen: !this.state.menuIsOpen})
                    }}
                >
                    Click me
                </button>
            </StyledHeader>
        );
    }
}

export default Header;