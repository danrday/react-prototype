# react boilerplate

frontend

setup deps:

"dependencies": {
    "apollo-boost": "^0.1.16",
    "apollo-client": "^2.4.2",
    "babel-core": "^7.0.0-bridge.0",
    "babel-plugin-styled-components": "^1.7.1",
    "date-fns": "^2.0.0-alpha.7", /*"Modern JavaScript date utility library"*/
    "downshift": "^2.2.3", /*primitives to build autocomplete/dropdown/select/combobox components*/
    "enzyme": "^3.6.0", /*JavaScript Testing utility for React*/
    "enzyme-adapter-react-16": "^1.5.0",
    "graphql": "^14.0.2",
    "graphql-tag": "^2.9.2", /*utilities for parsing GraphQL queries*/
    "lodash.debounce": "^4.0.8",
    "next": "^7.0.0",
    "next-with-apollo": "^3.1.3",
    "nprogress": "^0.2.0", /*A nanoscopic progress bar.*/
    "prop-types": "^15.6.2", /*Runtime type checking for React props and similar objects.*/
    "react": "^16.5.2",
    "react-adopt": "^0.6.0", /*simple method that composes multiple render prop components*/
    "react-apollo": "^2.2.1",
    "react-dom": "^16.5.2",
    "react-transition-group": "^2.5.0", /*perform animations when a React component enters or leaves the DOM */
    "styled-components": "^3.4.9",
    "waait": "^1.0.2" /*Returns a promise that resolves after how many milliseconds you pass it.*/
  },
  "devDependencies": {
    "babel-jest": "^23.6.0",
    "babel-plugin-module-resolver": "^3.1.1",
    "casual": "^1.5.19", /*Fake data generator */
    "enzyme-to-json": "^3.3.4",
    "graphql-tools": "^4.0.0",
    "jest": "^23.6.0",
    "jest-transform-graphql": "^2.1.0"
  },


Tech Stack:

Next.js
	-Does all of the tooling for you under the hood (webpack compiling, code-splitting)
	-Server side rendering (instant rendering, pre-loading)
	-getInitialProps lifecycle method allows you to wait on async data to resolve before the page is shipped to the browser
	-does routing for you, nice because you just have to make pages



import Link from 'next/link' to use pushstate instead of reloading browser when page changes


pages/_app.js is our entry point, Next.js recognizes this as a custom 'App' component. This is nice for:
    -Persisting layout between page changes
    -Keeping state when navigating pages
    -Custom error handling using componentDidCatch
    -Inject additional data into pages (for example by processing GraphQL queries)


#graphql-
one endpoint you can hit for any query
strongly typed

you get the benefit of tools being able to analyze your code and provide to you a whole bunch of documentation.



#APOLLO
apollo does all the data management stuff that a redux store would do, plus:
fetching of data from server side
pushing of data to your mutations
do caching
it helps manage local state
gives you error and loading UI states (never have to set flags, never have to manually catch errors)

(gold standard for working with GraphQL in React)


