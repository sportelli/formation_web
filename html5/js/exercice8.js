function ajoutUtilisateurDB(user)
{
	var utilisateurs = [];
	if ( localStorage["users"] != null ) 
	{
		utilisateurs = JSON.parse(localStorage["users"]);
	}
	utilisateurs.push(user);
	localStorage["users"] = JSON.stringify(utilisateurs);
	dessineTableau();
}

function ajouteUtilisateursClic()
{
	var user = {};
	user.nom = document.querySelector("#nom").value;
	user.prenom = document.querySelector("#prenom").value;

	ajoutUtilisateurDB(user);
	
	document.querySelector("#nom").value = document.querySelector("#prenom").value = "";
}

/**
* Calcule et met à jour le compteur de nb de visites 
* en fonction de ce qu'il y a dans le localStorage (ou pas)
*/
function dessineTableau()
{
	if ( typeof (localStorage) != null ) 
	{
		var utilisateurs = [];
		if ( localStorage["users"] != null ) 
		{
			utilisateurs = JSON.parse(localStorage["users"]);
		}

		var tab = document.querySelector("#bodytab");
		var str= "";
		// ou for (var user in utilisateurs) 
		for (var i = 0; i < utilisateurs.length; i++)
		{
			str += "<tr><td>" + utilisateurs[i].nom + "</td><td>" + utilisateurs[i].prenom + "</td></tr>";
		}
		tab.innerHTML = str;
	}
}

window.onload = function () {
	dessineTableau();
	document.querySelector("#clic").onclick = ajouteUtilisateursClic;
} ;