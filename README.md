# Oh my Webpack

## How to use
Just define some object literals in `config/config.js`

* `port:` Assign port for your project
* `basePath:` Its folder name where your project has all files and folders
* `entryFile:` Define name of file which will contain entire project files using `import` or `require`
* `outputJS:` This will be js file which will have all minimized javascript code of project. This file will be generated automatically
* `outputCSS:` CSS file which will have minimized CSS code of project. This file will be generated automatically

### example
```
port: 1500,
basePath: "public",
entryFile: "./index",
outputJS: "index.min.js",
outputCSS: "index.css"
```

## Features
- CSS
- Scss
- Stylus
- Autoprefix
- Auto Reload
- ES6 syntax
- Remove `console.log` for production build


## Installation
`npm install`
`npm install webpack-dev-server -g`

## Development
`npm start`

## Production Build
`npm run prod`