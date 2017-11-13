function ajoutUtilisateurDB(user)
{
	var utilisateurs = [];
	if ( localStorage["users"] != null ) 
	{
		utilisateurs = JSON.parse(localStorage["users"]);
	}
	utilisateurs.push(user);
	localStorage["users"] = JSON.stringify(utilisateurs);
}

function ajouteUtilisateursClic()
{
	var user = {};
	user.nom = document.querySelector("#nom").value;
	user.prenom = document.querySelector("#prenom").value;

	ajoutUtilisateurDB(user);
	dessineTableau();
	
	document.querySelector("#nom").value = document.querySelector("#prenom").value = "";
}

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
		for (var i = 0; i < utilisateurs.length; i++)
		{
			str += "<tr><td>" + utilisateurs[i].nom + "</td><td>" + utilisateurs[i].prenom + "</td></tr>";
		}
		tab.innerHTML = str;
	}
}