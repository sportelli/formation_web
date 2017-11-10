// Methode < HTML5
var monP = document.getElementById("p1");
console.log(monP);

var mesPPair = document.getElementsByClassName("pair");
console.log(mesPPair);

// Notation JQuery
// $("#p1") 

// Notation HTML5 Query Selectors
var _monP = document.querySelector("#p1");
console.log(_monP);

var _mesPPair = document.querySelectorAll(".pair");
console.log(_mesPPair);

var _mesP = document.querySelectorAll("p");
console.log(_mesP);

// Récupération du premier enfant
var firstChild = document
					.querySelector("#p1")
					.firstChild.nodeName;
console.log("1er enfant: " + 
				firstChild);

// Changement du contenu sur #p1 lors du clic
function changeContenu()
{
	var p1 = document.querySelector("#p1");
	p1.textContent = "bienvenue !";
}

// A chaque clic sur "houdini", on ajoute
// ou supprime la classe "hidden" a notre
// image
document.querySelector("#bouton2").onclick = function()
{
	className = document.querySelector("#monChat").className;
	if (className == "hidden")
		className = "";
	else 
		className = "hidden";
	document.querySelector("img").className= className;
};
