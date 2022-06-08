class Occasion extends Auto {
    constructor(type, couleur, marque, valeur, prix) {
        super(type, couleur, marque);
        
        // valeur et prix sont spécifique à Occasion
        this._valeur = valeur;
        this._prix = prix;

    }


    calculeDifference() {
        return this._valeur - this._prix;
    }
}