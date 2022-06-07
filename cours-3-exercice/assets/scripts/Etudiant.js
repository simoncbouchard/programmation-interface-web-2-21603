/**
 * On définit notre espace de nom 
 * qui est en fait une variable globale qui permettra de protéger notre code et celui des autres.
 * L'instruction suivante affecte la variable global MON_ESPACE_NOM à deux options 
 * (le || permet de distinguer les deux options).
 * Option 1 : Si la variable globale MON_ESPACE_NOM existe déjà on récupère son contenu et l'affecte à l'objet MON_ESPACE_NOM
 * Option 2 : Si la variable globale MON_ESPACE_NOM n'existe pas on l'affecte à l'objet vide {} 
 */

var MON_ESPACE_NOM = MON_ESPACE_NOM || {};

(function(MEN) {
	
	//console.log(M)
	let Personne = MEN.Personne;							// Récupère l'objet Personne stocké dans l'objet MON_ESPACE_NOM (MEN)
	//console.log(Personne);
	//console.log(Personne.prototype);


	function afficheCours(cours) {
		return `Les cours que je suis sont : ${cours}`;
	}	


	/**
	 * Méthodes publiques
	 */

	function afficheDetails() { 
		let domString = `
						<div>
							<p>${this.afficheNom()}</p>
							<p>${afficheCours(this.cours)}</p>
						</div>
						`;

		this.elResult.insertAdjacentHTML('beforeend', domString);
	}
	

	/**
	 * Création du constructeur Etudiant
	 */
	let Etudiant = function(prenom, nom, cours) {
		Personne.call(this, prenom, nom);					// La méthode call() réalise un appel à une fonction avec une valeur this donnée et des arguments fournis individuellement. (MDN)
		this.cours = cours;
	}


	/**
	 * Pour que Étudiant puisse hérité du constructeur de Personne,
	 * on doit affecter au prototype de Etudiant un pointeur sur le prototype de Personne
	 */
	Etudiant.prototype = Object.create(Personne.prototype);
	//console.log(Etudiant.prototype)

	// Initialise le constructeur de Etudiant pour qu'il pointe sur le prototype Etudiant
	Etudiant.prototype.constructor = Etudiant;

	// Ensemble des méthodes publiques dans le prototype de Etudiant ajoutées aux méthodes héritées de Personne
	Etudiant.prototype.afficheDetails = afficheDetails


	// Crée et affecte la clé Etudiant de l'objet MON_ESPACE_NOM au constructeur Etudiant
	MON_ESPACE_NOM.Etudiant = Etudiant;

})(MON_ESPACE_NOM);