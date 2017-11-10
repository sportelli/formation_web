<?php
echo "Methode appelee: " . $_SERVER['REQUEST_METHOD'];
echo "<br />nom = " . $_POST['nom'];
echo "<br />sexe = " . $_POST['sexe'];
echo "<br />rememberme = " . $_POST['rememberMe'];
echo "<br />departement = " . $_POST['departement'];
echo "<br />departementBis = " ;
foreach ($_POST['departementBis'] as $dep) {
	echo $dep . "-";
}
echo "<br/> Dep ===" . $_POST['dep'] ;

?>