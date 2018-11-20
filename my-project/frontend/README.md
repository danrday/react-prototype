# React Boiler Plate Project

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

Dillinger is a cloud-enabled, mobile-ready, offline-storage, AngularJS powered HTML5 Markdown editor.

  - Type some Markdown on the left
  - See HTML in the right
  - Magic

`#` New Features!

  - Import a HTML file and watch it magically convert to Markdown
  - Drag and drop images (requires your Dropbox account be linked)


You can also:
  - Import and save files from GitHub, Dropbox, Google Drive and One Drive
  - Drag and drop markdown and HTML files into Dillinger
  - Export documents as Markdown, HTML and PDF

Markdown is a lightweight markup language based on the formatting conventions that people naturally use in email.  As [John Gruber] writes on the [Markdown site][df1]

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is *actually* written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.

### Tech

Dillinger uses a number of open source projects to work properly:

* [AngularJS] - HTML enhanced for web apps!
* [Ace Editor] - awesome web-based text editor
* [markdown-it] - Markdown parser done right. Fast and easy to extend.
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [Gulp] - the streaming build system
* [Breakdance](http://breakdance.io) - HTML to Markdown converter
* [jQuery] - duh

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd dillinger
$ npm install -d
$ node app
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```

### Plugins

Dillinger is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md] [PlDb] |
| Github | [plugins/github/README.md] [PlGh] |
| Google Drive | [plugins/googledrive/README.md] [PlGd] |
| OneDrive | [plugins/onedrive/README.md] [PlOd] |
| Medium | [plugins/medium/README.md] [PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md] [PlGa] |


### Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands.

First Tab:
```sh
$ node app
```

Second Tab:
```sh
$ gulp watch
```

(optional) Third:
```sh
$ karma test
```
#### Building for source
For production release:
```sh
$ gulp build --prod
```
Generating pre-built zip archives for distribution:
```sh
$ gulp build dist --prod
```
### Docker
Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd dillinger
docker build -t joemccann/dillinger:${package.json.version}
```
This will create the dillinger image and pull in the necessary dependencies. Be sure to swap out `${package.json.version}` with the actual version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 8000 of the host to port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart="always" <youruser>/dillinger:${package.json.version}
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:8000
```

#### Kubernetes + Google Cloud

See [KUBERNETES.md](https://github.com/joemccann/dillinger/blob/master/KUBERNETES.md)


### Todos

 - Write MORE Tests
 - Add Night Mode

License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>


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

