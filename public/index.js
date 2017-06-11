// HTMLs
import {} from './index.html'

// JS
import {} from './scripts/functions'

// CSS
import {} from './css/app.css'
import {} from './scss/app.scss'
import {} from './stylus/app.styl'

const app = document.getElementsByClassName("app")[0];

const showText =  text => 
	app.innerHTML = text

showText("Oh my Webpack");