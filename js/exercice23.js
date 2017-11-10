// Variable "globale"
var test=22;

// Je definis mes fonctions
function bonjourPrenom(prenom){
	console.log(test);
	console.log("bonjour" + prenom);
}

function bonjour(){
	// console.log("bonjour");
	// Variable "locale"
	var nom="test test";
	bonjourPrenom("");
}

var affSomme = function(a, b){
	console.log(a+b);
}

// programme principal 
bonjour();
bonjourPrenom("felix");
affSomme(1,2);
console.log(test);
//console.log(nom);

var affPrenom = function(){
	console.log(this.prenom);
}

// Je définis un objet frederique
var frederique = {};

// Je définis un attribut prenom 
// pour l'objet frederique
frederique.prenom = "frederique";

// Je définis un attribut affichePrenom
// qui pointe vers la variable affPrenom
frederique.affichePrenom = affPrenom;

var felix = { "prenom": "felix", "age": 15};
felix.affichePrenom = affPrenom;
felix.age = 32;

// Appel de la méthode affichePrenom 
// de l'objet felix
felix.affichePrenom();
frederique.affichePrenom();

var x="bonjour";
console.log(x);
console.log(x.toUpperCase());

var y="toto";
if ( y == "toto" ) {
	console.log(y.toUpperCase());
}
else {
	console.log(y);
}

// Exercice : Avoir un argument boolean
// qui permet d'indiquer si on souhaite
// afficher le prénom en majuscule ou non 
var affPrenomMaj = function(isUpperCase){
	// isUpperCase = true ou false 		
	if ( isUpperCase == true) 
	{
		console.log(this.prenom.toUpperCase());
	}
	else 
	{
		console.log(this.prenom);
	}
}

felix.getCapsFirstName = affPrenomMaj;
felix.getCapsFirstName(true);
felix.getCapsFirstName(false);

var isMajeurFunc = function (){
	if (this.age >= 18)
		return true;
	else
		return false; 
	
}

felix.isMajeur = isMajeurFunc;

// Creer une méthode isMajeur 
// qui va récupérer l'age de mon objet
// et me renvoyer true/false en fonction
if ( felix.isMajeur() )
{
	console.log("PASSER");
}
else 
{
	console.log("REFUSER");
}

/** Utiliser une valeur de retour **/
var affSommeReturn = function(a, b){
	return a+b;
}

var somme = affSommeReturn(2,3);
console.log(somme);
/** Utiliser une valeur de retour **/

