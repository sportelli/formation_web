let tailleBateaux = [];

$("#homme").click(function(){
    $("#childname").prop("disabled", true );
});

$("#femme").click(function(){
    $("#childname").prop("disabled", false );
});

$("#age").change(function(){
    $("#ageText").text( $("#age").val() );
});

function cleanCPErrorMessage(){
    $("#cpErrorMessage").empty();
}

function showCPErrorMessage(message){
    $("#cpErrorMessage").html('<span class="alert alert-danger" role="alert">'
                                + message 
                                + '</span>');
}

$("#cp").keyup(function(){
    const size = $("#cp").val().length;
    cleanCPErrorMessage();
    if (size < 5)
        showCPErrorMessage("Trop court");
    else if ( size > 5)
        showCPErrorMessage("Trop long");
        
});

$("#page1Button").click(function(){
    $("#page1").css("display","none");
    $("#page2").removeClass("invisible");
});

function getFormNomBateau(id){
    return '<div class="form-group row"><label for="tailleBateau' + id + '" class="col-sm-2">Taille bateau ' + (id+1) + '</label><div class="col-sm-10"><input type="text" name="tailleBateau' + id + '" id="tailleBateau' + id + '" placeholder="Paradise"/>';
}

$("#bateaux").change(function(){
    if ( $("#bateaux").val() > tailleBateaux.length ){
        let i = 0;
        while ($("#bateaux").val() > tailleBateaux.length){
            if ( $("#tailleBateau"+i).length == 0){
                $("#taillebateaux").append(getFormNomBateau(i));
            }
            if (tailleBateaux.length -1 < i)
                tailleBateaux.push(0);
            i++;
        }

    }
    else if  ( $("#bateaux").val() < tailleBateaux.length ){
        let nouvelleTailleTableaux = [];
        for (let i=0; i < $("#bateaux").val(); i++){
            nouvelleTailleTableaux[i] = tailleBateaux[i];
        }
        for (let i=tailleBateaux.length; i >= $("#bateaux").val(); i--){
            if ( $("#tailleBateau"+i).length != 0){
                $("#tailleBateau"+i+"").parent().parent().remove();
            }
        }
        tailleBateaux = nouvelleTailleTableaux;
    }
});

$("#page2Button").click(function(){
    const client = {};
    client.sexe = ($("#homme").prop("checked") == true) ? "H" : "F";
    client.nom = $("#name").val();
    client.nomjeunefille= $("#childname").val();
    client.prenom = $("#firstname").val();
    client.age = $("#age").val();
    client.cp = $("#cp").val();
    client.ville = $("#ville").val();
    client.tailleBateaux = [];
    for (let index = 0; index < tailleBateaux.length; index++) {
        client.tailleBateaux.push($("#tailleBateau"+index).val());
    }
    client.interets = [];
    //client.interets = $("#interets").val();
    // ou :
    $("#interets").val().forEach( interet => {
        client.interets.push(interet);
    });

    console.log(client);

    $.ajax(
        { 
            "url" : "http://localhost:8080/formation/php/register.php",
            "type" : "POST",
            "data" : { "user" : JSON.stringify(client) }
        }
    // Si cela se passe bien : 
    ).done (function (donnees){
        console.log(donnees);

        // Creation d'un tableau (page 3)
        // avec l'affichage des dossiers
        // renvoyés par le serveur
        afficheTableauDossiers(JSON.parse(donnees));

    }
    ).fail( function() {
        console.log("OUPS !");
    }
    ).always(function(){
        console.log("TOUJOURS");
    });


});

function afficheTableauDossiers(dossiers){
    $("#page2").css("display","none");
    $("#page3").removeClass("invisible");
    
    dossiers.forEach(dossier => {
        $("tbody").append("<tr><td>" + dossier.id 
            + "</td><td>" + dossier.nom 
            + "</td><td>" + dossier.prenom 
            + "</td><td>" + dossier.age
            + "</td><td>" + dossier.sexe  
            + "</td><td>" + dossier.tailleBateau
            + "</td><td>" + dossier.assurance
            + "</td><td>" + dossier.casse
            + "</td></tr>");
    });
}