var leo = document.getElementById("leo");
var cas = document.getElementById("cas");
var gemini = document.getElementById("gemini");

leo.addEventListener("click", hileo);

leo.addEventListener("click", byeleo);

function hileo(){
	leo.height = "700";
	leo.width = "700";
	bigdip.style.display="none";
	virgo.style.display="none";
	cas.style.display="none";
	gemini.style.display="none";
	orion.style.display="none";

}

function byeleo(){
	leo.height="250";
	leo.width = "250";
	bigdip.style.display="unset";
	virgo.style.display="unset";
	cas.style.display="unset";
	gemini.style.display="unset";
	orion.style.display="unset";
}


var bigdip = document.getElementById("bigdip");

bigdip.addEventListener("click", hibigdip);

bigdip.addEventListener("mouseout", byebigdip);

function hibigdip(){
	bigdip.height = "700";
	bigdip.width = "700";
	bigdip.style.top = 0 + "px";
	leo.style.display="none";
	virgo.style.display="none";
	cas.style.display="none";
	gemini.style.display="none";
	orion.style.display="none";
}

function byebigdip(){
	bigdip.height="250";
	bigdip.width = "250";
	leo.style.display="unset";
	virgo.style.display="unset";
	cas.style.display="unset";
	gemini.style.display="unset";
	orion.style.display="unset";
}

var virgo = document.getElementById("virgo");

virgo.addEventListener("click", hivirgo);

virgo.addEventListener("mouseout", byevirgo);

function hivirgo(){
	virgo.height = "700";
	virgo.width = "700";
	virgo.style.top = 0 + "px";
	leo.style.display="none";
	bigdip.style.display="none";
	cas.style.display="none";
	gemini.style.display="none";
	orion.style.display="none";

}

function byevirgo(){
	virgo.height="250";
	virgo.width = "250";
	leo.style.display="unset";
	bigdip.style.display="unset";
	cas.style.display="unset";
	gemini.style.display="unset";
	orion.style.display="unset";

}