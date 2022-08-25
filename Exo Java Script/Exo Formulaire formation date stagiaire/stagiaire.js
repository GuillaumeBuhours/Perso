class Stagiaire
{
    prenom;
    nom;
    constructor(pPrenom = "", pNom = ""){
        this.prenom = pPrenom;
        this.nom = pNom.toUpperCase();
    }

    salutation(){
        return `je m'appelle ${this.prenom} ${this.nom}`;
    }

}