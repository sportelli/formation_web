<?php
	 class User {
		public  $id;
		public  $firstName;
		public  $lastName;
	}

	$currentUser = new User();
	$currentUser->id=$_POST['id'];
	$currentUser->firstName="Felix";
	$currentUser->lastName="SPORTELLI";

	$currentUser2 = new User();
	$currentUser2->id=$_POST['id']+1;
	$currentUser2->firstName="Jerome";
	$currentUser2->lastName="SOURDIN";

	$tab = array();
	array_push($tab, $currentUser);
	array_push($tab, $currentUser2);
	
	header("Content-type: application/json");
	echo json_encode($tab);
	
?>