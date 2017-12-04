// HTMLs
import './index.html'

// JS
import './scripts/functions'
import es6Function from './es6/index.es6'

// CSS
import './css/app.css'
import './scss/app.scss'
import './stylus/app.styl'

const app = document.getElementById("app");

const showText = text => 
	app.innerHTML = text

showText("Oh my Webpack")
es6Function("coming from es6 file", "app")