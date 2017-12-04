// HTMLs
import {} from './index.html'

// JS
import {} from './scripts/functions'
import es6Function from './es6/index.es6'

// Elm
import Elm from "./elm/index.elm"
import Increment from "./elm/increment.elm"

// CSS
// import {} from './css/app.css'
// import {} from './scss/app.scss'
import {} from './stylus/app.styl'

const app = document.getElementById("app");
const showText = text => 
	app.innerHTML = text

Elm.Main.embed(app)
Increment.Main.embed(app)
showText("Oh my Webpack")
es6Function("coming from es6 file", "app")