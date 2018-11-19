import App, {Container} from 'next/app'
import Page from '../components/Page'
import {ApolloProvider} from 'react-apollo'
import withData from '../lib/withData'

class MyApp extends App {
    static async getInitialProps({Component, ctx}) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        // this exposes the query to the user
        pageProps.query = ctx.query
        return { pageProps }
    }

    /*all runtime errors should bubble up and be intercepted here
    * so we can (TO DO) send them to the server for logging*/
    componentDidCatch (error, errorInfo) {
        console.log("Hey I caught an error!", error)
        // This is needed to render errors correctly in development / production
        super.componentDidCatch(error, errorInfo)
    }

    render() {
        const {Component, apollo, pageProps} = this.props

        return (
            <Container>
                <ApolloProvider client={this.props.apollo}>
                    <Page>
                        <Component {...pageProps}/>
                    </Page>
                </ApolloProvider>
            </Container>
        )
    }
}

export default withData(MyApp)