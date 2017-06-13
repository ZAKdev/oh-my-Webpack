// HTMLs
import {} from './index.html'

// JS
import {} from './scripts/functions'
import es6Function from './es6/index.es6'

// CSS
import {} from './css/app.css'
import {} from './scss/app.scss'
import {} from './stylus/app.styl'

const app = document.getElementById("app");

const showText = text => 
	app.innerHTML = text

showText("Oh my Webpack")
es6Function("coming from es6 file", "app")