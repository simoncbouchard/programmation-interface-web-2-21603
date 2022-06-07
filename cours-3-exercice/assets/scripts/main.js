(function(MEN) {

    /**
     * Récupère les objets stockés dans l'objet MON_ESPACE_NOM (MEN)
     */
    let Personne = MEN.Personne,
        Etudiant = MEN.Etudiant,
        Professeur = MEN.Professeur


    let elForm = document.querySelector('form'),
        elSelect = elForm.statut,
        elInputPrenom = elForm.prenom,
        elInputNom = elForm.nom,
        elInputEcours = elForm.ecours,
        elDetails = document.querySelectorAll('[data-js-details]'),
        elBtn = elForm.querySelector('button'),
        checkedOption = 'etudiant';


    elSelect.addEventListener('change', function() {

        checkedOption = elSelect.value;

        for (let i = 0, l = elDetails.length; i < l; i++) {
            
            let dataset = elDetails[i].dataset.jsDetails;

            if (checkedOption == dataset) {
                if (elDetails[i].classList.contains('hidden')) elDetails[i].classList.remove('hidden')
            } else {
                elDetails[i].classList.add('hidden')
            }
        }
    });


    elBtn.addEventListener('click', function(e) {
        e.preventDefault();

        let prenom = elInputPrenom.value,
            nom = elInputNom.value;

        if (checkedOption == 'etudiant') {
            let cours = elInputEcours.value;
            new Etudiant(prenom, nom, cours).afficheDetails();
        }


    });








})(MON_ESPACE_NOM);