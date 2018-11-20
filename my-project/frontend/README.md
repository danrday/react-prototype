### Project Dependencies

### App structure
  - pages/_app.js is our entry point, Next.js recognizes this as a custom 'App' component. This is nice for:
     - Persisting layout between page changes
     - Keeping state when navigating pages
     - Custom error handling using componentDidCatch
     - Inject additional data into pages (for example by processing GraphQL queries)
  - We import Link from 'next/link' to use pushstate instead of reloading browser when page changes

Explanation of some of the dependencies of our project for quick reference.

| Dependency | Description |
| ------ | ------ |
| date-fns | JavaScript date utility library |
| downshift | Primitives to build autocomplete/dropdown/select/combobox components |
| enzyme | JavaScript Testing utility for React |
| graphql-tag | Utilities for parsing GraphQL queries |
| nprogress | A nanoscopic progress bar |
| prop-types | Runtime type checking for React props and similar objects |
| react-adopt | Simple method that composes multiple render prop components |
| react-transition-group | Perform animations when a React component enters or leaves the DOM |
| waait | Returns a promise that resolves after how many milliseconds you pass it |