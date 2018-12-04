# React Boiler Plate Project

![Tech stack: React, Next.js, Apollo, GraphQL-Yoga](./techstack.jpg)
Image credit: Wes Bos from [Advanced React](https://www.advancedreact.com)

### Tech
`#` Next.js
  - Does all of the tooling for you under the hood (webpack compiling, code-splitting)
  - Server side rendering (instant rendering, pre-loading)
  - getInitialProps lifecycle method allows you to wait on async data to resolve before the page is shipped to the browser
  - does routing for you, nice because you just have to make pages

`#` GraphQL
  - one endpoint you can hit for any query
  - strongly typed
  - you get the benefit of tools being able to analyze your code and provide to you a whole bunch of documentation.

  `#` Apollo
  - apollo does all the data management stuff that a redux store would do, plus:
  - fetching of data from server side
  - pushing of data to your mutations
  - do caching
  - it helps manage local state
  - gives you error and loading UI states (never have to set flags, never have to manually catch errors)
  - (gold standard for working with GraphQL in React)


### Installation

cd into backend and frontend directories and npm install.

```sh
$ npm run dev
```

Credits
---
Stack & set-up: Wes Bos [Advanced React](https://www.advancedreact.com)
If you want a better understanding of this stack I highly recommend this course!

License
----

ISC
