function disBonjour(prenom=""){
    console.log("bonjour " + prenom);
}

function ajout_utilisateurs (liste, prenom, i=0 ){
    const liclass = (i%2 == 0) ? "lipair" : "liimpair";
    //liste.append("<li>" + prenom + "</li>");
    liste.prepend("<li class='"+ liclass + "'>" + prenom + "</li>");
}

let i = 0;

$(document).ready(function(){
    //console.log("JQuery est prêt");

    // Selecteurs
    //$("#p1").hide();
    //$("p").hide();
    //$(".impair").hide();
    
    // Evenements
/*    $("#monBouton").click(function(){
        console.log("bonjour  x");
    });
    $("#monBouton").click(disBonjour);
    */
    for (let i=1; i <= 4; i++) {
        $("#p"+i).dblclick( function () {
            $("#p"+i).hide();     
        } );
    }
    
    // Contenu: text() html() et val()
    let contenu = $("#p1").text();
    console.log(contenu);
    
    contenu += "...";
    $("#p1").text(contenu);
    
    $("#p2").html("Ceci est mon <strong>second</strong> p")
    
    $("#monBouton").click(function(){
        const prenom= $("#prenom").val();
        disBonjour(prenom);
        ajout_utilisateurs($("#liste_utilisateurs"), prenom, i++);
    });

    $("#monBoutonInit").click(function(){
        $("#prenom").val("felix");
    });

    $("#monBoutonDelete").click(function(){
        // Supprimer tout
        //$("#liste_utilisateurs").remove();
        //$("#liste_utilisateurs").empty();

        // Supprimer seulement ceux avec la classe, l'id, ...
//        $("#liste_utilisateurs").empty(".pair");
/*        $("li.lipair").remove();
        $("li#li1").remove();
        $("#p1").remove();
*/
//        $("#liste_utilisateurs li:first-child").remove();
//        $("#liste_utilisateurs li:nth-child(2n)").remove();
    });

    $("#cacheButton").click (function(){
        $("#p1").removeClass("montrer");
        $("#p1").addClass("cacher");
    });
    
    $("#montreButton").click (function(){
        $("#p1").removeClass("cacher");
        $("#p1").addClass("montrer");
    });

    $("#toggleButton_backup").click (function(){
        // Si p1 a la classe cacher d'activé : 
        // -> on la supprime et on ajoute la classe montrer
        // Si p1 a la classe montrer d'activé : 
        // -> on la supprime et on ajoute la classe cacher
        if ( $("#p1").hasClass("montrer") ){
            $("#p1").removeClass("montrer");
            $("#p1").addClass("cacher");
        } else if ($("#p1").hasClass("cacher") ) {
            $("#p1").removeClass("cacher");
            $("#p1").addClass("montrer");
        } else {
            $("#p1").addClass("cacher");
        }

    });

    $("#toggleButton").click (function(){
        // ou ... 
        $("#p1").toggleClass("cacher");
    });
    
    $("#cssButton").click (function(){
        // Ajoute une propriete CSS
        $("#p1").css("background-color" , "green");
        $("#p2").css( 
                        { 
                            "background-color": "red", 
                            "color" : "white" 
                        }
                    );
    });
});