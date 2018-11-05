import React, {Component} from 'react';
import Header from '../components/Header'
import Meta from '../components/Meta'
import styled from 'styled-components'

const StyledPage = styled.div`
  background: grey;
  color: green;
`

const Inner = styled.div`
  margin-left: 0;
  margin-top: 60px;
  transition: all 0.2s ease-in-out;
  ${({openMenu}) => openMenu && `
        margin-left: 230px;
      `}
`

class Page extends Component {
    state = {
        menuIsOpen: true
    }

    handleToggle = () => {
        this.setState({menuIsOpen: !this.state.menuIsOpen})
    }

    render() {
        return (
            <StyledPage>
                <Meta/>
                <Header menuIsOpen={this.state.menuIsOpen} toggle={this.handleToggle}/>
                <Inner openMenu={this.state.menuIsOpen}>
                    { this.props.children }
                </Inner>
            </StyledPage>
        );
    }
}

export default Page;