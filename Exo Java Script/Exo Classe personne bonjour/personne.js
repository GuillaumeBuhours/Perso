class Personne
{
    nom;
    prenom;
    constructor(nom = "", prenom = ""){
        this.nom = nom.toUpperCase();
        this.prenom = prenom;
    }
    salutation(){
        return `Bonjour ${this.nom} ${this.prenom}`;
    }
}