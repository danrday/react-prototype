import React, {Component} from 'react';
import Header from '../components/Header'
import Meta from '../components/Meta'
import styled from 'styled-components'

const StyledPage = styled.div`
  background: grey;
  color: #474747;
`

const Inner = styled.div`
  margin-left: 60px;
  margin-top: 60px;
  transition: all 0.2s ease-in-out;
  ${({openMenu}) => openMenu && `
        margin-left: 230px;
      `}
`

class Page extends Component {
    state = {
        menuIsOpen: true,
        menuIsHovered: false,
    }

    handleToggle = () => {
        this.setState({menuIsOpen: !this.state.menuIsOpen})
    }

    handleHover = () => {
        this.setState({menuIsHovered: !this.state.menuIsHovered})
    }

    render() {
        return (
            <StyledPage>
                <Meta/>
                <Header menuIsOpen={this.state.menuIsOpen || this.state.menuIsHovered} toggle={this.handleToggle} hover={this.handleHover}/>
                <Inner openMenu={this.state.menuIsOpen || this.state.menuIsHovered}>
                    { this.props.children }
                </Inner>
            </StyledPage>
        );
    }
}

export default Page;