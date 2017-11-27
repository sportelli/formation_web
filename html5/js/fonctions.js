var EDIT_IMG = "images/edit.png";
var DELETE_IMG = "images/delete.png";

function ajoutUtilisateurDB(user)
{
	var utilisateurs = [];
	if ( localStorage["users"] != null ) 
	{
		utilisateurs = JSON.parse(localStorage["users"]);
	}


	// Ajout 	
	if (user.id == null) {
		// On définit un id à user qui vaut la taille (actuelle) de users
		// +1 pour commencer à 1
		user.id = utilisateurs.length +1 ;

		utilisateurs.push(user);
	}

	// Edition
	else 
	{
		for (var i = 0; i < utilisateurs.length; i++) {
			if (utilisateurs[i].id == user.id)
			{
				utilisateurs[i].nom = user.nom;
				utilisateurs[i].prenom = user.prenom;
			}
		}
	}

	localStorage["users"] = JSON.stringify(utilisateurs);
}

function deleteUserDB(idUser)
{
	if ( localStorage["users"] != null ) 
	{
		var utilisateurs = JSON.parse(localStorage["users"]);
		for (var i= 0 ; i < utilisateurs.length ; i++)
			if (utilisateurs[i].id === idUser)
				delete utilisateurs[i];

		localStorage["users"] = JSON.stringify(utilisateurs.filter(function(i){ return i != null; }));
	}
}

function getUserDB(idUser)
{
	var user = null;
	if ( localStorage["users"] != null ) 
	{
		var utilisateurs = JSON.parse(localStorage["users"]);
		for (var i= 0 ; i < utilisateurs.length ; i++)
			if (utilisateurs[i].id === idUser)
				user = utilisateurs[i];
	}
	return user;
}

function ajouteUtilisateursClic()
{
	var user = {};
	user.nom = document.querySelector("#nom").value;
	user.prenom = document.querySelector("#prenom").value;

	// Id existe?  
	if ( document.querySelector("#id").value != "")
		user.id = document.querySelector("#id").value;

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
			if (utilisateurs[i] != null)
			{
			str += "<tr><td>" 
						+ utilisateurs[i].nom + "</td><td>" 
						+ utilisateurs[i].prenom + "</td>" 
						+ "<td><img src='"+EDIT_IMG+"' alt='edit button' onClick='editUser("+utilisateurs[i].id+")'></td>"
						+ "<td><img src='"+DELETE_IMG+"' alt='delete button' onClick='deleteUser("+utilisateurs[i].id+")'></td>"						
						+"</tr>";
			}
		}
		tab.innerHTML = str;
	}
}

/**
* Cette fonction va lancer l'edition d'un utilisateur sur le champs de saisie
*
* @arg id utilisateur 
*/
function editUser(idUser)
{
	var user = getUserDB(idUser);
	document.querySelector("#id").value = user.id;
	document.querySelector("#nom").value = user.nom;
	document.querySelector("#prenom").value = user.prenom;
}

/**
* Cette fonction va lancer la suppression d'un utilisateur 
*
* @arg id utilisateur 
*/
function deleteUser(idUser)
{
	console.log("suppression utilisateur " + idUser);
	deleteUserDB(idUser);
	dessineTableau();	
}