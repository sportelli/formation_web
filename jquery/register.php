<?php

$user = json_decode($_POST['user']);
//print_r($user);

// Creer un objet dossier par bateau
// qui contient tous les éléments de l'utilisateur
// + statut du dossier: "En cours"
// + Date de réception du dossier

$date = getdate();
$dossiers = array();

foreach ($user->tailleBateaux as $t) {
    $dossier = array();
    $dossier['id'] = rand();
    $dossier['date'] = $date["mday"] . "/" . $date["mon"] . "/" . $date["year"];
    $dossier['statut'] = "En cours";
    $dossier['nom'] = $user->nom;
    $dossier['nom'] .= ($user->sexe == "F") ? $user->nomjeunefille : "";
    $dossier['prenom'] = $user->prenom;
    $dossier['age'] = $user->age;
    $dossier['sexe'] = $user->sexe;
    $dossier["assurance"] = false;
    $dossier["casse"] = false;
    foreach ($user->interets as $interet){
        if ($interet == "assurance")
            $dossier["assurance"] = true;
        if ($interet == "casse")
            $dossier["casse"] = true;
    }
    $dossier["tailleBateau"] = $t;
    array_push($dossiers, $dossier);
}    

print_r(json_encode($dossiers));