<?php

	require_once('fonctionsDB.php');
	
	$request_payload = file_get_contents('php://input');
    $data = json_decode($request_payload, true);

    //var_dump($request_payload);
    //var_dump($data);
    
    if (isset($data['idEquipe'])) {

		$joueurs = getAllJoueursParEquipe($data['idEquipe']);

		// Boucler sur les joueurs obtenus
		while ($joueur = mysqli_fetch_assoc($joueurs)) { 		// mysqli_fetch_assoc => récupére les résultats sous forme de tableau associatif
			$tableau[] = $joueur;
		}
		
		echo json_encode($tableau);								// json_encode => retourne la représentation JSON d'une valeur
			
	} else {
		echo 'Erreur query string';
	}
?>