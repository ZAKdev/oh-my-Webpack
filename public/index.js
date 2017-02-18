require("./scripts/functions");

const login = require("./login");

const app = document.getElementsByClassName("app")[0];

function showText (text){
	app.innerHTML = text
}

showText("My First WebPack, Running very awesome");

login("ZAK", "asf");

require("./css/app.css");
require("./scss/app.scss");
require("./stylus/app.styl");