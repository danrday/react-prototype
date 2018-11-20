import React, {Component} from 'react';
import Header from '../components/Header'
import Meta from '../components/Meta'
import styled, {ThemeProvider, injectGlobal} from 'styled-components'

const theme = {
    red: '#FF0000',
    black: '#393939',
    grey: '#3A3A3A',
    lightgrey: '#E1E1E1',
    offWhite: '#EDEDED',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

injectGlobal`
html {
  box-sizing: border-box;
  font-size: 10px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  padding: 0;
  //margin: 0;
  font-size: 1.5rem;
  color: #474747;
}
.node circle {
  fill: #fff;
  stroke: steelblue;
  stroke-width: 3px;
}

.node text { font: 12px sans-serif; }

.node--internal text {
  text-shadow: 0 1px 0 #fff, 0 -1px 0 #fff, 1px 0 0 #fff, -1px 0 0 #fff;
}

.link {
  fill: none;
  stroke: #ccc;
  stroke-width: 2px;
}
`

const StyledPage = styled.div`
  
`

const Inner = styled.div`
  margin-left: 80px;
  margin-top: 80px;
  transition: all 0.2s ease-in-out;
  letter-spacing: 0.2px;
  font-family: "Roboto", "Helvetica Neue", Arial, sans-serif;
  font-size: 14px;
  ${({openMenu}) => openMenu && `
        margin-left: 230px;
      `}
`

class Page extends Component {
    state = {
        menuIsOpen: false,
        menuIsHovered: false,
    }

    handleToggle = () => {
        this.setState({menuIsOpen: !this.state.menuIsOpen})
    }

    handleHover = (bool) => {
        this.setState({menuIsHovered: bool})
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Meta/>
                    <Header menuIsOpen={this.state.menuIsOpen || this.state.menuIsHovered} toggle={this.handleToggle} hover={this.handleHover}/>
                    <Inner openMenu={this.state.menuIsOpen || this.state.menuIsHovered}>
                        { this.props.children }
                    </Inner>
                </StyledPage>
            </ThemeProvider>
        );
    }
}

export default Page;