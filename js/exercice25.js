// GESTION DES TABLEAUX D ENTIERS

var tabEntier = [1, 2 ,3 ];

// Attention les indices commencent à zéro
console.log(tabEntier[0]);

// Taille d'un tableau (array)
console.log(tabEntier.length);

// Afficher la somme de toutes les 
// valeurs de mon array
var somme = 0;
for (var i=0;i < tabEntier.length;i++)
{
	somme = somme + tabEntier[i];
	// ou somme += tabEntier[i];
}

console.log(somme);

// GESTION DES TABLEAUX DE CARACTERES
var tabChar = [ "jerome", "benjamin", "nicolas"];

tabChar.push("felix");

console.log("tabChar : ");

for (var i= tabChar.length -1 ; i >= 0 ;i--)
{
	console.log("- " + tabChar[i]);
}