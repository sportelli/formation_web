// Objet felix 
// attribut tab enfants 
// 2 methodes : 
// nouvelEnfant( nomEnfant ) 
// listerEnfants : affiche les 
//      noms de tous les enfants de felix

var felix = { "prenom": "félix", "enfants" : []};

felix.nouvelEnfant = function(nomEnfant)
{
	this.enfants.push(nomEnfant);
}

felix.listerEnfants = function()
{
	console.log("Enfants de " + this.prenom + ":");
	for (var i=0; i < this.enfants.length;i++)
	{
		console.log("- " + this.enfants[i]);
	}
}

felix.nouvelEnfant("lea");
felix.nouvelEnfant("leo");
felix.listerEnfants();