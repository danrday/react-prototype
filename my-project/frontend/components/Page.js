import React, {Component} from 'react';
import Header from '../components/Header'
import Meta from '../components/Meta'
import styled from 'styled-components'

const StyledPage = styled.div`
  background: grey;
  color: green;
`

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  background: red;
`

class Page extends Component {
    render() {
        return (
            <StyledPage>
                <Meta/>
                <Header/>
                <Inner>
                { this.props.children }
                </Inner>
            </StyledPage>
        );
    }
}

export default Page;